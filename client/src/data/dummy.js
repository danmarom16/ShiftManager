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
} from 'react-icons/bs';

import { IoMdContacts } from 'react-icons/io';
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
