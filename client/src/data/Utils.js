import { FaComputer } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";

export const dashboardCardsInitialData = [
  {
    icon: <FaComputer />,
    amount: 0,
    percentage: 0,
    title: "Number Of Shifts",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
    percentageColor: "gray-500",
  },
  {
    icon: <FaRegCalendarAlt />,
    amount: 0,
    percentage: 0,
    title: "Regular Hours",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
    percentageColor: "gray-500",
  },
  {
    icon: <MdOutlineNightlight />,
    amount: 0,
    percentage: 0,
    title: "Night Hours",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(15, 5, 154)",
    pcColor: "green-600",
    percentageColor: "gray-500",
  },
  {
    icon: <GiPeaceDove />,
    amount: 0,
    percentage: 0,
    title: "Shabbat Hours",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
    percentageColor: "gray-500",
  },
];

export const dashboardPieInitialData = [
  { name: "Regular Hours", value: 40, text: "" },
  { name: "Night Hours", value: 30, text: "" },
  { name: "Shabbat & Holiday Hours", value: 30, text: "" },
];

export const currentMonthRevenueInitialData = {
  revenue: 0,
  percentage: 0,
};


export const taskInitialData = {
  Id:1,
  Status: "Open",
  Summary: "",
  Priority: "Low",
  RankId: 1,
  Color: "#02897B",
  ClassName: "e-story, e-low, e-nancy-davloio",
  Date: new Date(),
}