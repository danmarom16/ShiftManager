import React, { createContext, useContext, useState } from "react";
import { shiftApiService } from "../services/api_services/ShiftApiService.js";
import axios from "axios";
import { csvUploadService } from "../services/file_upload_service/CsvUploadService.js";
import { localDataManipulatorService } from "../services/localDataManipulatorService.js";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { formaterService } from "../services/formaterService.js";
const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  /* 
    USE STATES
  */
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [formData, setFormData] = useState({});
  const [dashboardData, setDashboardData] = useState(0);
  const [filteredShiftsData, setFilteredShiftsData] = useState([]);

  const [accumulatedRevenue, setAccumulatedRevenue] = useState(0);
  const [currentMonthRevenue, setCurrentMonthRevenue] = useState({
    revenue: 0,
    percentage: 0,
  });
  const [dashboardCardsData, setDashboardCardsData] = useState([
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
  ]);

  const [dashboardPieData, setDashboardPieData] = useState([
    { name: "Regular Hours", value: 40, text: "" },
    { name: "Night Hours", value: 30, text: "" },
    { name: "Shabbat & Holiday Hours", value: 30, text: "" },
  ]);

  // FOR MODAL CONTROL
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isCsvUploadDialogOpen, setIsCsvUploadDialogOpen] = useState(false);
  const [isTypeDialogOpen, setIsTypeDialogOpen] = useState(false);
  const [isFilteringDialogOpen, setIsFilteringDialogOpen] = useState(false);

  // FOR DIALOG DATA TRANSMISSION
  const [shiftsData, setShiftsData] = useState([]);
  const [dialogData, setDialogData] = useState({});
  const [toDeleteData, setToDeleteData] = useState({});
  const [userID, setUserID] = useState("650d62a9699a8e9247279e9b");
  const [updateNumber, setUpdateNumber] = useState(0);
  const [type, setType] = useState();
  const [enterTime, setEnterTime] = useState();
  const [exitTime, setExitTime] = useState();
  const [filterMonth, setFilterMonth] = useState();
  const [calendarData, setCalendarData] = useState();
  /* 
    	THEME RELATED FUNCTIONS
   */
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    console.log(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  /* 
    	API RELATED FUNCTIONS 
  	*/

  const getDashboardPieChartData = () => {
    const data = [];
    if (
      dashboardCardsData != undefined &&
      dashboardCardsData.length != 0 &&
      currentMonthRevenue != undefined
    ) {
      dashboardCardsData.forEach((element) => {
        if (element.title != "Number Of Shifts") {
          const obj = {};
          obj.name = element.title;
          const pieData = localDataManipulatorService.getPieTotalHours(
            element,
            currentMonthRevenue.revenue
          );
          obj.value = pieData.amount;
          obj.text = pieData.percentage + "%";
          data.push(obj);
        }
      });
    }
    console.log(data);
    setDashboardPieData(data);
  };

  const getAccumulatedRevenue = async () => {
    if (dashboardData != 0 && dashboardData.length != 0) {
      const revenue =
        await localDataManipulatorService.getAccumulatedRevenue(dashboardData);
      setAccumulatedRevenue(revenue.toFixed(2));
    }
  };

  const getCurrentMonthRevenue = async () => {
    if (dashboardData != 0 && dashboardData.length != 0) {
      const currentMonth = new Date().getMonth() + 1;
      const currentMonthRev = await localDataManipulatorService.getMonthRevenue(
        dashboardData,
        currentMonth
      );
      setCurrentMonthRevenue(currentMonthRev);
    }
  };

  const getCalendarData = async () => {
    try {
      const data = await shiftApiService.getCalendarData();
      setCalendarData(data);
    } catch (error) {
      console.error("Error fetching shift data:", error);
    }
  };
  // GET DASHBOARD CHART DATA
  const getDashboardChartData = async () => {
    try {
      const data = await shiftApiService.getDashboardData();
      setDashboardData(data);
    } catch (error) {
      console.error("Error fetching shift data:", error);
    }
  };

  // GET DASHBOARD CARDS DATA
  const getDashboardCardsData = async () => {
    try {
      const data = await shiftApiService.getDashboardCardsData();
      const grid = localDataManipulatorService.formatDashboardCards(data);
      setDashboardCardsData(grid);
    } catch (error) {
      console.error("Error fetching shift data:", error);
    }
  };

  // GET ALL DATA
  const getAllShiftData = async () => {
    try {
      const data = await shiftApiService.getAll(); //uses shiftApi service to decouple context provider from api logic
      setShiftsData(data);
      console.log(data);
      setFilteredShiftsData(data);
    } catch (error) {
      console.error("Error fetching shift data:", error);
    }
  };

  // INSERT SHIFT
  const postOneShift = async (shiftData) => {
    try {
      const result = await shiftApiService.postOne(shiftData);
      if (result == 200) {
        setShiftsData(getAllShiftData());
      } else {
        console.log("Didn't add shift cause status code is not 200");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // EDIT SHIFT
  const postEditShift = async (updatedData) => {
    const result = await shiftApiService.editOne(updatedData);
    if (result == 200) {
      setShiftsData(getAllShiftData());
    } else {
      console.log("Error in updating shift");
    }
  };

  // DELETE ONE SHIFT
  const deleteOneShift = async () => {
    try {
      const result = await shiftApiService.deleteOne(toDeleteData);
      if (result == 200) {
        setShiftsData(getAllShiftData());
      } else {
        console.log("Didn't delete shift cause status code is not 200");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // DELETE MANY SHIFTS
  const deleteManyShifts = async () => {
    try {
      const result = await shiftApiService.deleteMany(toDeleteData);
      if (result == 200) {
        setShiftsData(getAllShiftData());
      } else {
        console.log("Didn't delete shift cause status code is not 200");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // load CSV file to DB
  const loadFile = async (args) => {
    try {
      const data = await csvUploadService.load(args);
      const response = await shiftApiService.insertFromCsv(data);
      setShiftsData(getAllShiftData());
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const forceUpdate = () => {
    setUpdateNumber(updateNumber + 1);
    console.log("In force update");
  };

  return (
    <StateContext.Provider
      value={{
        dashboardCardsData: dashboardCardsData,
        setDashboardCardsData: setDashboardCardsData,
        activeMenu: activeMenu,
        setActiveMenu: setActiveMenu,
        isClicked: isClicked,
        setIsClicked: setIsClicked,
        handleClick: handleClick,
        screenSize: screenSize,
        setScreenSize: setScreenSize,
        currentColor: currentColor,
        currentMode: currentMode,
        themeSettings: themeSettings,
        setThemeSettings: setThemeSettings,
        setMode: setMode,
        setColor: setColor,
        formData: formData,
        setFormData: setFormData,
        shiftsData: shiftsData,
        setShiftsData: setShiftsData,
        getAllShiftData: getAllShiftData,
        postOneShift: postOneShift,
        isEditDialogOpen: isEditDialogOpen,
        setIsEditDialogOpen: setIsEditDialogOpen,
        dialogData: dialogData,
        setDialogData: setDialogData,
        postEditShift: postEditShift,
        forceUpdate: forceUpdate,
        isAddDialogOpen: isAddDialogOpen,
        setIsAddDialogOpen: setIsAddDialogOpen,
        isDeleteDialogOpen: isDeleteDialogOpen,
        setIsDeleteDialogOpen: setIsDeleteDialogOpen,
        toDeleteData: toDeleteData,
        setToDeleteData: setToDeleteData,
        deleteOneShift: deleteOneShift,
        deleteManyShifts: deleteManyShifts,
        isCsvUploadDialogOpen: isCsvUploadDialogOpen,
        setIsCsvUploadDialogOpen: setIsCsvUploadDialogOpen,
        loadFile: loadFile,
        getDashboardChartData: getDashboardChartData,
        setDashboardData: setDashboardData,
        dashboardData: dashboardData,
        getAccumulatedRevenue: getAccumulatedRevenue,
        accumulatedRevenue: accumulatedRevenue,
        setAccumulatedRevenue: setAccumulatedRevenue,
        isTypeDialogOpen: isTypeDialogOpen,
        setIsTypeDialogOpen: setIsTypeDialogOpen,
        type: type,
        setType: setType,
        enterTime: enterTime,
        setEnterTime: setEnterTime,
        exitTime: exitTime,
        setExitTime: setExitTime,
        getDashboardCardsData: getDashboardCardsData,
        getCurrentMonthRevenue: getCurrentMonthRevenue,
        currentMonthRevenue: currentMonthRevenue,
        dashboardPieData: dashboardPieData,
        setDashboardPieData: setDashboardPieData,
        getDashboardPieChartData: getDashboardPieChartData,
        isFilteringDialogOpen: isFilteringDialogOpen,
        setIsFilteringDialogOpen: setIsFilteringDialogOpen,
        filterMonth: filterMonth,
        setFilterMonth: setFilterMonth,
        filteredShiftsData: filteredShiftsData,
        setFilteredShiftsData: setFilteredShiftsData,
        getCalendarData: getCalendarData,
        calendarData: calendarData,
        setCalendarData: setCalendarData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
