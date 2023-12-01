import { FaComputer } from 'react-icons/fa6';
import { MdOutlineNightlight } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GiPeaceDove } from 'react-icons/gi';
import { LocalCalService } from './api_services/LocalCalService';

const HOURLY_WAGE = 50;
const getMaxMonthlyRevenue = () => HOURLY_WAGE * 1.5 * 8 * 20;

const getAccumulatedRevenue = async (dashboardData) => {
	let sum = 0;
	if (dashboardData === undefined || dashboardData.length === 0) {
		return '';
	} else {
		dashboardData.forEach((monthlyRevenue) => {
			sum += monthlyRevenue.y;
		});
		return sum;
	}
};

const getCurrentMonthRevenue = async (dashboardData, currentMonth) => {
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
	const currentMonthStr = monthNames[currentMonth - 1];
	const lastMonthStr = monthNames[currentMonth - 2];
	console.log(lastMonthStr);
	const monthData = dashboardData.filter(
		(dataObj) => currentMonthStr === dataObj.x
	)[0];
	const lastMonthData = dashboardData.filter(
		(dataObj) => lastMonthStr === dataObj.x
	)[0];

	const currentMonthRevenue = monthData.y;
	const currentMonthPercentage = LocalCalService.calPercentage(
		lastMonthData.y,
		monthData.y
	);
	return {
		revenue: currentMonthRevenue.toFixed(2),
		percentage: currentMonthPercentage,
	};
};

const formatDashboardCards = (data) => {
	const percentageDinamicColor = {
		'+': 'green-400',
		'-': 'red-500',
		'=': 'gray-200',
	};

	return [
		{
			icon: <FaComputer />,
			amount: data.numOfShifts.length,
			percentage: data.numOfShifts.percentage.val,
			title: 'Shifts',
			iconColor: '#03C9D7',
			iconBg: '#E5FAFB',
			pcColor: 'green-500',
			percentageColor: percentageDinamicColor[data.numOfShifts.percentage.type],
		},
		{
			icon: <FaRegCalendarAlt />,
			amount: data.regularHours.length,
			percentage: data.regularHours.percentage,
			title: 'Regular Hours',
			iconColor: 'rgb(228, 106, 118)',
			iconBg: 'rgb(255, 244, 229)',
			pcColor: 'green-600',
			percentageColor:
				percentageDinamicColor[data.regularHours.percentage.type],
		},
		{
			icon: <MdOutlineNightlight />,
			amount: data.nightHours.length,
			percentage: data.nightHours.percentage,
			title: 'Night Hours',
			iconColor: 'rgb(255, 244, 229)',
			iconBg: 'rgb(15, 5, 154)',
			pcColor: 'green-600',
			percentageColor: percentageDinamicColor[data.nightHours.percentage.type],
		},
		{
			icon: <GiPeaceDove />,
			amount: data.shabbatHours.length,
			percentage: data.shabbatHours.percentage,
			title: 'Shabbat & Holyday Hours',
			iconColor: 'rgb(0, 194, 146)',
			iconBg: 'rgb(235, 250, 242)',
			pcColor: 'red-600',
			percentageColor: percentageDinamicColor[data.shabbatHours.percentage.type],
		},
	];
};
export const localDataManipulatorService = {
	getAccumulatedRevenue,
	getMaxMonthlyRevenue,
	formatDashboardCards,
	getCurrentMonthRevenue,
};
