import { shiftService } from './shiftsService.js';
import { salaryService } from './salaryService.js';
import { outsourceApiService } from './outsourceApiService.js';

// DO ONLY AT THE END OF THE MONTH, ELSE PRESENT LAST MONTH
const getCardsData = async (shiftsData) => {
	const data = {
		numOfShifts: { length: '', percentage: '' },
		regularHours: { length: '', percentage: '' },
		shabbatHours: { length: '', percentage: '' },
		nightHours: { length: '', percentage: '' },
	};

	const currentMonth = new Date().getMonth() ; // PREV MONTH
	const prevMonth = new Date().getMonth() - 1; // PREV PREV MONTH

	const monthlyShifts = shiftsData.filter(
		(shift) => 
			shift.date.getMonth() + 1  === currentMonth
	);

	const prevMonthShifts = shiftsData.filter(
		(shift) => shift.date.getMonth() + 1 === prevMonth
	);

	
	if (monthlyShifts.length == 0) {
		return {
			numOfShifts: { length: 0, percentage: { val: 0, type: '=' } },
			regularHours: { length: 0, percentage: { val: 0, type: '=' } },
			shabbatHours: { length: 0, percentage: { val: 0, type: '=' } },
			nightHours: { length: 0, percentage: { val: 0, type: '=' } },
		};
	}

	data.numOfShifts.length = String(monthlyShifts.length);
	data.numOfShifts.percentage = salaryService.calPercentage(
		parseInt(prevMonthShifts.length),
		parseInt(monthlyShifts.length)
	);

	let monthlyRegularHours = 0;
	let monthlyShabbatHours = 0;
	let monthlyNightHours = 0;

	for (const shift of monthlyShifts) {
		if (shift.day === 'Friday' && shift.type === 'Evening') {
			const shabbatTimes = await outsourceApiService.getShabbatTimes(
				shift.date
			);
			const regularHours = shiftService.getShiftLength(
				shift.enterTime,
				shabbatTimes.start
			);
			monthlyRegularHours += regularHours;
			const shabbatHours = shiftService.getShiftLength(
				shabbatTimes.start,
				shift.exitTime
			);
			monthlyShabbatHours += shabbatHours;
		}
		if (shift.day === 'Saturday' && shift.type === 'Evening') {
			const shabbatTimes = await outsourceApiService.getShabbatTimes(
				shift.date
			);
			const regularHours = shiftService.getShiftLength(
				shabbatTimes.end,
				shift.exitTime
			);
			monthlyRegularHours += regularHours;

			const shabbatHours = shiftService.getShiftLength(
				shift.enterTime,
				shabbatTimes.end
			);
			monthlyShabbatHours += shabbatHours;
		} else if (shift.day === 'Saturday' && shift.type === 'Morning') {
			monthlyShabbatHours += parseFloat(shift.length);
		} else if (shift.day === 'Friday' && shift.type === 'Night') {
			monthlyShabbatHours += parseFloat(shift.length);
		} else if (shift.type === 'Night') {
			monthlyNightHours += parseFloat(shift.length);
		} else {
			monthlyRegularHours += parseFloat(shift.length);
		}
	}

	let prevMonthlyRegularHours = 0;
	let prevMonthlyShabbatHours = 0;
	let prevMonthlyNightHours = 0;
	if (prevMonthShifts.length != 0) {
		for (const shift of prevMonthShifts) {
			if (shift.day === 'Friday' && shift.type === 'Evening') {
				const shabbatTimes = await outsourceApiService.getShabbatTimes(
					shift.date
				);
				const regularHours = shiftService.getShiftLength(
					shift.enterTime,
					shabbatTimes.start
				);
				prevMonthlyRegularHours += regularHours;
				const shabbatHours = shiftService.getShiftLength(
					shabbatTimes.start,
					shift.exitTime
				);
				prevMonthlyShabbatHours += shabbatHours;
			}
			if (shift.day === 'Saturday' && shift.type === 'Evening') {
				const shabbatTimes = await outsourceApiService.getShabbatTimes(
					shift.date
				);
				const regularHours = shiftService.getShiftLength(
					shabbatTimes.end,
					shift.exitTime
				);
				prevMonthlyRegularHours += regularHours;

				const shabbatHours = shiftService.getShiftLength(
					shift.enterTime,
					shabbatTimes.end
				);
				prevMonthlyShabbatHours += shabbatHours;
			} else if (shift.day === 'Saturday' && shift.type === 'Morning') {
				prevMonthlyShabbatHours += parseFloat(shift.length);
			} else if (shift.day === 'Friday' && shift.type === 'Night') {
				prevMonthlyShabbatHours += parseFloat(shift.length);
			} else if (shift.type === 'Night') {
				prevMonthlyNightHours += parseFloat(shift.length);
			} else {
				prevMonthlyRegularHours += parseFloat(shift.length);
			}
		}
	}

	data.regularHours.length = monthlyRegularHours.toFixed(2);
	data.regularHours.percentage = salaryService.calPercentage(
		prevMonthlyRegularHours,
		monthlyRegularHours
	);

	data.shabbatHours.length = monthlyShabbatHours.toFixed(2);
	data.shabbatHours.percentage = salaryService.calPercentage(
		prevMonthlyShabbatHours,
		monthlyShabbatHours
	)
	data.nightHours.length = monthlyNightHours.toFixed(2);
	data.nightHours.percentage = salaryService.calPercentage(
		prevMonthlyNightHours,
		monthlyNightHours
	);
	return data;
};

const getMonthlySalary = async (shiftsData) => {
	const data = [];
	const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1;
	const availableMonths = months.filter((month) => month <= currentMonth);
	for (const month of availableMonths) {
		const yValue = await salaryService.calMonthRevenue(month, shiftsData);
		data.push({ x: monthNames[month - 1], y: yValue });
	}
	return data;
};

// ADD TOTAL AMOUNT CALCULATION
const formateCsvData = async (dataObject) => {
	console.log(dataObject)
	const shifts = [];
	const rawShifts = dataObject.data.shifts;

	for (const rawShift of rawShifts) {
		rawShift['Enter time'] = rawShift['Enter time'].padStart(5, '0');
		rawShift['Exit time'] = rawShift['Exit time'].padStart(5, '0');
		const length = shiftService.getShiftLength(
			rawShift['Enter time'],
			rawShift['Exit time']
		);
		const day = shiftService.getShiftDay(rawShift.Date);
		const type = shiftService.getShiftType(rawShift['Enter time']);
		const date = shiftService.formateDate(rawShift.Date, '/');
		const shift = {
			date: date,
			day: day,
			type: type,
			length: length,
			enterTime: rawShift['Enter time'],
			exitTime: rawShift['Exit time'],
		};
		const revenue = await salaryService.calShiftRevenue(shift);

		shift.totalAmount = revenue;
		shifts.push(shift);
	}

	return shifts;
};

const formateSingleShift = async (shiftData) => {
	const length = shiftService.getShiftLength(
		shiftData.enterTime,
		shiftData.exitTime
	);
	shiftData.length = length;
	shiftData.date = shiftService.formateDate(shiftData.date, '-');
	const totalAmout = await salaryService.calShiftRevenue(shiftData);
	shiftData.totalAmount = totalAmout;

	return shiftData;
};

export const dataService = {
	formateCsvData,
	formateSingleShift,
	getMonthlySalary,
	getCardsData,
};
