import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";

import { TbReportAnalytics } from "react-icons/tb";

import { BsKanban } from "react-icons/bs";

import { BsCurrencyDollar } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <TbReportAnalytics />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "shifts table",
        icon: <IoMdContacts />,
      },
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
    ],
  },

  // {
  // 	title: 'Apps',
  // 	links: [

  // 		// {
  // 		// 	name: 'kanban',
  // 		// 	icon: <BsKanban />,
  // 		// },
  // 		// {
  // 		// 	name: 'editor',
  // 		// 	icon: <FiEdit />,
  // 		// },
  // 	],
  // },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <MdAccountCircle />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Shifts",
    desc: "Shifts Table",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
