import React from 'react';
import {
	AiOutlineCalendar,
	AiOutlineBarChart,
	AiOutlineStock,
} from 'react-icons/ai';
import {
	FiShoppingBag,
	FiEdit,
	FiPieChart,
	FiBarChart,
	FiCreditCard,
	FiStar,
	FiShoppingCart,
} from 'react-icons/fi';
import {
	BsKanban,
	BsBarChart,
	BsBoxSeam,
	BsCurrencyDollar,
	BsShield,
	BsChatLeft,
} from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts, IoMdAddCircleOutline } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

export const links = [
	{
		title: 'Dashboard',
		links: [
			{
				name: 'dashboard',
				icon: <FiShoppingBag />,
			},
		],
	},

	{
		title: 'Pages',
		links: [
			{
				name: 'shifts table',
				icon: <IoMdContacts />,
			},
		],
	},
	{
		title: 'Apps',
		links: [
			{
				name: 'calendar',
				icon: <AiOutlineCalendar />,
			},
			{
				name: 'kanban',
				icon: <BsKanban />,
			},
			{
				name: 'editor',
				icon: <FiEdit />,
			},
		],
	},
];

export const themeColors = [
	{
		name: 'blue-theme',
		color: '#1A97F5',
	},
	{
		name: 'green-theme',
		color: '#03C9D7',
	},
	{
		name: 'purple-theme',
		color: '#7352FF',
	},
	{
		name: 'red-theme',
		color: '#FF5C8E',
	},
	{
		name: 'indigo-theme',
		color: '#1E4DB7',
	},
	{
		color: '#FB9678',
		name: 'orange-theme',
	},
];

export const shiftsGrid = [
	{
		field: 'checkbox',
		width: '50',
		type: 'checkbox',
	},
	{
		field: 'date',
		headerText: 'Date',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'day',
		headerText: 'Day',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'type',
		headerText: 'Type',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'enterTime',
		headerText: 'Enter Type',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'exitTime',
		headerText: 'Exit Time',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'length',
		headerText: 'Length',
		width: '150',
		editType: 'dropdownedit',
		textAlign: 'Center',
	},
	{
		field: 'totalAmount',
		headerText: 'Total Amount',
		format: 'C2',
		textAlign: 'Center',
		editType: 'numericedit',
		currencyCode: 'ILS',
		width: '150',
	},
];

const gridEmployeeProfile = (props) => (
	<div className='flex items-center gap-2'>
		<img
			className='rounded-full w-10 h-10'
			src={props.EmployeeImage}
			alt='employee'
		/>
		<p>{props.Name}</p>
	</div>
);

const gridEmployeeCountry = (props) => (
	<div className='flex items-center justify-center gap-2'>
		<GrLocation />
		<span>{props.Country}</span>
	</div>
);

const customerGridImage = (props) => (
	<div className='image flex gap-4'>
		<img
			className='rounded-full w-10 h-10'
			src={props.CustomerImage}
			alt='employee'
		/>
		<div>
			<p>{props.CustomerName}</p>
			<p>{props.CustomerEmail}</p>
		</div>
	</div>
);

const customerGridStatus = (props) => (
	<div className='flex gap-2 justify-center items-center text-gray-700 capitalize'>
		<p
			style={{ background: props.StatusBg }}
			className='rounded-full h-3 w-3'
		/>
		<p>{props.Status}</p>
	</div>
);

export const customersGrid = [
	{ type: 'checkbox', width: '50' },
	{
		headerText: 'Name',
		width: '150',
		template: customerGridImage,
		textAlign: 'Center',
	},
	{
		field: 'ProjectName',
		headerText: 'Project Name',
		width: '150',
		textAlign: 'Center',
	},
	{
		field: 'Status',
		headerText: 'Status',
		width: '130',
		format: 'yMd',
		textAlign: 'Center',
		template: customerGridStatus,
	},
	{
		field: 'Weeks',
		headerText: 'Weeks',
		width: '100',
		format: 'C2',
		textAlign: 'Center',
	},
	{
		field: 'Budget',
		headerText: 'Budget',
		width: '100',
		format: 'yMd',
		textAlign: 'Center',
	},

	{
		field: 'Location',
		headerText: 'Location',
		width: '150',
		textAlign: 'Center',
	},

	{
		field: 'CustomerID',
		headerText: 'Customer ID',
		width: '120',
		textAlign: 'Center',
		isPrimaryKey: true,
	},
];

export const employeesGrid = [
	{
		headerText: 'Employee',
		width: '150',
		template: gridEmployeeProfile,
		textAlign: 'Center',
	},
	{ field: 'Name', headerText: '', width: '0', textAlign: 'Center' },
	{
		field: 'Title',
		headerText: 'Designation',
		width: '170',
		textAlign: 'Center',
	},
	{
		headerText: 'Country',
		width: '120',
		textAlign: 'Center',
		template: gridEmployeeCountry,
	},

	{
		field: 'HireDate',
		headerText: 'Hire Date',
		width: '135',
		format: 'yMd',
		textAlign: 'Center',
	},

	{
		field: 'ReportsTo',
		headerText: 'Reports To',
		width: '120',
		textAlign: 'Center',
	},
	{
		field: 'EmployeeID',
		headerText: 'Employee ID',
		width: '125',
		textAlign: 'Center',
	},
];

export const earningData = [
	{
		icon: <MdOutlineSupervisorAccount />,
		amount: '39,354',
		percentage: '-4%',
		title: 'Customers',
		iconColor: '#03C9D7',
		iconBg: '#E5FAFB',
		pcColor: 'red-600',
	},
	{
		icon: <BsBoxSeam />,
		amount: '4,396',
		percentage: '+23%',
		title: 'Products',
		iconColor: 'rgb(255, 244, 229)',
		iconBg: 'rgb(254, 201, 15)',
		pcColor: 'green-600',
	},
	{
		icon: <FiBarChart />,
		amount: '423,39',
		percentage: '+38%',
		title: 'Sales',
		iconColor: 'rgb(228, 106, 118)',
		iconBg: 'rgb(255, 244, 229)',

		pcColor: 'green-600',
	},
	{
		icon: <HiOutlineRefresh />,
		amount: '39,354',
		percentage: '-12%',
		title: 'Refunds',
		iconColor: 'rgb(0, 194, 146)',
		iconBg: 'rgb(235, 250, 242)',
		pcColor: 'red-600',
	},
];

export const recentTransactions = [
	{
		icon: <BsCurrencyDollar />,
		amount: '+$350',
		title: 'Paypal Transfer',
		desc: 'Money Added',
		iconColor: '#03C9D7',
		iconBg: '#E5FAFB',
		pcColor: 'green-600',
	},
	{
		icon: <BsShield />,
		amount: '-$560',
		desc: 'Bill Payment',
		title: 'Wallet',
		iconColor: 'rgb(0, 194, 146)',
		iconBg: 'rgb(235, 250, 242)',
		pcColor: 'red-600',
	},
	{
		icon: <FiCreditCard />,
		amount: '+$350',
		title: 'Credit Card',
		desc: 'Money reversed',
		iconColor: 'rgb(255, 244, 229)',
		iconBg: 'rgb(254, 201, 15)',

		pcColor: 'green-600',
	},
	{
		icon: <TiTick />,
		amount: '+$350',
		title: 'Bank Transfer',
		desc: 'Money Added',

		iconColor: 'rgb(228, 106, 118)',
		iconBg: 'rgb(255, 244, 229)',
		pcColor: 'green-600',
	},
	{
		icon: <BsCurrencyDollar />,
		amount: '-$50',
		percentage: '+38%',
		title: 'Refund',
		desc: 'Payment Sent',
		iconColor: '#03C9D7',
		iconBg: '#E5FAFB',
		pcColor: 'red-600',
	},
];

export const weeklyStats = [
	{
		icon: <FiShoppingCart />,
		amount: '-$560',
		title: 'Top Sales',
		desc: 'Johnathan Doe',
		iconBg: '#FB9678',
		pcColor: 'red-600',
	},
	{
		icon: <FiStar />,
		amount: '-$560',
		title: 'Best Seller',
		desc: 'MaterialPro Admin',
		iconBg: 'rgb(254, 201, 15)',
		pcColor: 'red-600',
	},
	{
		icon: <BsChatLeft />,
		amount: '+$560',
		title: 'Most Commented',
		desc: 'Ample Admin',
		iconBg: '#00C292',
		pcColor: 'green-600',
	},
];

export const userProfileData = [
	{
		icon: <BsCurrencyDollar />,
		title: 'My Profile',
		desc: 'Account Settings',
		iconColor: '#03C9D7',
		iconBg: '#E5FAFB',
	},
	{
		icon: <BsShield />,
		title: 'My Inbox',
		desc: 'Messages & Emails',
		iconColor: 'rgb(0, 194, 146)',
		iconBg: 'rgb(235, 250, 242)',
	},
	{
		icon: <FiCreditCard />,
		title: 'My Tasks',
		desc: 'To-do and Daily Tasks',
		iconColor: 'rgb(255, 244, 229)',
		iconBg: 'rgb(254, 201, 15)',
	},
];

export const scheduleData = [
	{
		Id: 1,
		Subject: 'Explosion of Betelgeuse Star',
		Location: 'Space Center USA',
		StartTime: '2021-01-10T04:00:00.000Z',
		EndTime: '2021-01-10T05:30:00.000Z',
		CategoryColor: '#1aaa55',
	},
	{
		Id: 2,
		Subject: 'Thule Air Crash Report',
		Location: 'Newyork City',
		StartTime: '2021-01-11T06:30:00.000Z',
		EndTime: '2021-01-11T08:30:00.000Z',
		CategoryColor: '#357cd2',
	},
	{
		Id: 3,
		Subject: 'Blue Moon Eclipse',
		Location: 'Space Center USA',
		StartTime: '2021-01-12T04:00:00.000Z',
		EndTime: '2021-01-12T05:30:00.000Z',
		CategoryColor: '#7fa900',
	},
	{
		Id: 4,
		Subject: 'Meteor Showers in 2021',
		Location: 'Space Center USA',
		StartTime: '2021-01-13T07:30:00.000Z',
		EndTime: '2021-01-13T09:00:00.000Z',
		CategoryColor: '#ea7a57',
	},
	{
		Id: 5,
		Subject: 'Milky Way as Melting pot',
		Location: 'Space Center USA',
		StartTime: '2021-01-14T06:30:00.000Z',
		EndTime: '2021-01-14T08:30:00.000Z',
		CategoryColor: '#00bdae',
	},
	{
		Id: 6,
		Subject: 'Mysteries of Bermuda Triangle',
		Location: 'Bermuda',
		StartTime: '2021-01-14T04:00:00.000Z',
		EndTime: '2021-01-14T05:30:00.000Z',
		CategoryColor: '#f57f17',
	},
	{
		Id: 7,
		Subject: 'Glaciers and Snowflakes',
		Location: 'Himalayas',
		StartTime: '2021-01-15T05:30:00.000Z',
		EndTime: '2021-01-15T07:00:00.000Z',
		CategoryColor: '#1aaa55',
	},
	{
		Id: 8,
		Subject: 'Life on Mars',
		Location: 'Space Center USA',
		StartTime: '2021-01-16T03:30:00.000Z',
		EndTime: '2021-01-16T04:30:00.000Z',
		CategoryColor: '#357cd2',
	},
	{
		Id: 9,
		Subject: 'Alien Civilization',
		Location: 'Space Center USA',
		StartTime: '2021-01-18T05:30:00.000Z',
		EndTime: '2021-01-18T07:30:00.000Z',
		CategoryColor: '#7fa900',
	},
	{
		Id: 10,
		Subject: 'Wildlife Galleries',
		Location: 'Africa',
		StartTime: '2021-01-20T05:30:00.000Z',
		EndTime: '2021-01-20T07:30:00.000Z',
		CategoryColor: '#ea7a57',
	},
	{
		Id: 11,
		Subject: 'Best Photography 2021',
		Location: 'London',
		StartTime: '2021-01-21T04:00:00.000Z',
		EndTime: '2021-01-21T05:30:00.000Z',
		CategoryColor: '#00bdae',
	},
	{
		Id: 12,
		Subject: 'Smarter Puppies',
		Location: 'Sweden',
		StartTime: '2021-01-08T04:30:00.000Z',
		EndTime: '2021-01-08T06:00:00.000Z',
		CategoryColor: '#f57f17',
	},
	{
		Id: 13,
		Subject: 'Myths of Andromeda Galaxy',
		Location: 'Space Center USA',
		StartTime: '2021-01-06T05:00:00.000Z',
		EndTime: '2021-01-06T07:00:00.000Z',
		CategoryColor: '#1aaa55',
	},
	{
		Id: 14,
		Subject: 'Aliens vs Humans',
		Location: 'Research Center of USA',
		StartTime: '2021-01-05T04:30:00.000Z',
		EndTime: '2021-01-05T06:00:00.000Z',
		CategoryColor: '#357cd2',
	},
	{
		Id: 15,
		Subject: 'Facts of Humming Birds',
		Location: 'California',
		StartTime: '2021-01-19T04:00:00.000Z',
		EndTime: '2021-01-19T05:30:00.000Z',
		CategoryColor: '#7fa900',
	},
	{
		Id: 16,
		Subject: 'Sky Gazers',
		Location: 'Alaska',
		StartTime: '2021-01-22T05:30:00.000Z',
		EndTime: '2021-01-22T07:30:00.000Z',
		CategoryColor: '#ea7a57',
	},
	{
		Id: 17,
		Subject: 'The Cycle of Seasons',
		Location: 'Research Center of USA',
		StartTime: '2021-01-11T00:00:00.000Z',
		EndTime: '2021-01-11T02:00:00.000Z',
		CategoryColor: '#00bdae',
	},
	{
		Id: 18,
		Subject: 'Space Galaxies and Planets',
		Location: 'Space Center USA',
		StartTime: '2021-01-11T11:30:00.000Z',
		EndTime: '2021-01-11T13:00:00.000Z',
		CategoryColor: '#f57f17',
	},
	{
		Id: 19,
		Subject: 'Lifecycle of Bumblebee',
		Location: 'San Fransisco',
		StartTime: '2021-01-14T00:30:00.000Z',
		EndTime: '2021-01-14T02:00:00.000Z',
		CategoryColor: '#7fa900',
	},
	{
		Id: 20,
		Subject: 'Alien Civilization',
		Location: 'Space Center USA',
		StartTime: '2021-01-14T10:30:00.000Z',
		EndTime: '2021-01-14T12:30:00.000Z',
		CategoryColor: '#ea7a57',
	},
	{
		Id: 21,
		Subject: 'Alien Civilization',
		Location: 'Space Center USA',
		StartTime: '2021-01-10T08:30:00.000Z',
		EndTime: '2021-01-10T10:30:00.000Z',
		CategoryColor: '#ea7a57',
	},
	{
		Id: 22,
		Subject: 'The Cycle of Seasons',
		Location: 'Research Center of USA',
		StartTime: '2021-01-12T09:00:00.000Z',
		EndTime: '2021-01-12T10:30:00.000Z',
		CategoryColor: '#00bdae',
	},
	{
		Id: 23,
		Subject: 'Sky Gazers',
		Location: 'Greenland',
		StartTime: '2021-01-15T09:00:00.000Z',
		EndTime: '2021-01-15T10:30:00.000Z',
		CategoryColor: '#ea7a57',
	},
	{
		Id: 24,
		Subject: 'Facts of Humming Birds',
		Location: 'California',
		StartTime: '2021-01-16T07:00:00.000Z',
		EndTime: '2021-01-16T09:00:00.000Z',
		CategoryColor: '#7fa900',
	},
];

export const dropdownData = [
	{
		Id: '1',
		Time: 'March 2021',
	},
	{
		Id: '2',
		Time: 'April 2021',
	},
	{
		Id: '3',
		Time: 'May 2021',
	},
];
export const SparklineAreaData = [
	{ x: 1, yval: 2 },
	{ x: 2, yval: 6 },
	{ x: 3, yval: 8 },
	{ x: 4, yval: 5 },
	{ x: 5, yval: 10 },
];

export const contextMenuItems = [
	'AutoFit',
	'AutoFitAll',
	'SortAscending',
	'SortDescending',
	'Copy',
	'Edit',
	'Delete',
	'Save',
	'Cancel',
	'PdfExport',
	'ExcelExport',
	'CsvExport',
	'FirstPage',
	'PrevPage',
	'LastPage',
	'NextPage',
];

export const kanbanGrid = [
	{ headerText: 'To Do', keyField: 'Open', allowToggle: true },

	{ headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },

	{ headerText: 'Done', keyField: 'Close', allowToggle: true },
];

export const kanbanData = [
	{
		Id: 'Task 1',
		Title: 'Task - 29001',
		Status: 'Open',
		Summary: 'Analyze the new requirements gathered from the customer.',
		Type: 'Story',
		Priority: 'Low',
		Tags: 'Analyze,Customer',
		Estimate: 3.5,
		Assignee: 'Nancy Davloio',
		RankId: 1,
		Color: '#02897B',
		ClassName: 'e-story, e-low, e-nancy-davloio',
	},
];
