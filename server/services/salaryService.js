import { outsourceApiService } from './outsourceApiService.js';
import { shiftService } from './shiftsService.js';

const HOURLYWAGE = 50;
const MAX_SHIFT_REVENUE = HOURLYWAGE * 1.5 * 7;

const calPercentage = (oldValue, newValue) => {
	let val = 0;
	if (oldValue == 0) {
		val = newValue * 100;
	} else {
		let numVal = ((newValue - oldValue) / oldValue) * 100
		numVal = numVal.toFixed(0);
		val = String(numVal) + "%"
	}
	if (oldValue < newValue) {
		return { val: val, type: '+' };
	} else if (oldValue > newValue) {
		return { val:val, type: '-' };
	} else if (oldValue == newValue) {
		return { val: val, type: '=' };
	} else {
		return { val: 'Error', type: 'err' };
	}
};

const roundAmount = (amount) => {
	// Round to 3 decimal places
	return parseFloat(amount.toFixed(3));
};

// TODO - EXTRA HOURS
const calShiftRevenue = async (shift) => {
	if (shift.day === 'Friday' && shift.type === 'Evening') {
		const shabbatTimes = await outsourceApiService.getShabbatTimes(shift.date);
		const regularHours = shiftService.getShiftLength(
			shift.enterTime,
			shabbatTimes.start
		);
		const shabbatHours = shiftService.getShiftLength(
			shabbatTimes.start,
			shift.exitTime
		);
		return roundAmount(
			regularHours * HOURLYWAGE + shabbatHours * (HOURLYWAGE * 1.5)
		);
	}
	if (shift.day === 'Saturday' && shift.type === 'Evening') {
		const shabbatTimes = await outsourceApiService.getShabbatTimes(shift.date);
		const regularHours = shiftService.getShiftLength(
			shabbatTimes.end,
			shift.exitTime
		);
		const shabbatHours = shiftService.getShiftLength(
			shift.enterTime,
			shabbatTimes.end
		);
		return roundAmount(
			regularHours * HOURLYWAGE + shabbatHours * (HOURLYWAGE * 1.5)
		);
	} else if (shift.day === 'Saturday' && shift.type === 'Morning') {
		return roundAmount(length * HOURLYWAGE * 1.5);
	} else if (shift.day === 'Friday' && shift.type === 'Night') {
		return roundAmount(shift.length * 1.5 * HOURLYWAGE);
	} else if (shift.type === 'Night') {
		return roundAmount(shift.length * HOURLYWAGE * 1.25);
	} else {
		return roundAmount(shift.length * HOURLYWAGE);
	}
};

const calMonthRevenue = async (month, data) => {
	let sum = 0;
	const monthlyShifts = data.filter((shift) => {
		const shiftMonth = shift.date.getMonth() + 1; // Months are zero-based, so add 1
		return shiftMonth === month;
	});
	monthlyShifts.forEach(async (filteredShift) => {
		const amount = parseFloat(filteredShift.totalAmount);
		sum += amount;
	});
	return sum;
};

const getMaxMonthlyRevenue = () => {
	return 20 * MAX_SHIFT_REVENUE;
};

export const salaryService = {
	calMonthRevenue,
	calShiftRevenue,
	getMaxMonthlyRevenue,
	calPercentage,
};
