import React, { createContext, useContext, useState } from "react";
import { localDataManipulatorService } from "../services/localDataManipulatorService";
import { shiftApiService } from "../services/api_services/ShiftApiService";
import {
  currentMonthRevenueInitialData,
  dashboardCardsInitialData,
  dashboardPieInitialData,
} from "../data/Utils";

const StateContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(0);
  const [accumulatedRevenue, setAccumulatedRevenue] = useState(0);
  const [currentMonthRevenue, setCurrentMonthRevenue] = useState(
    currentMonthRevenueInitialData
  );
  const [dashboardCardsData, setDashboardCardsData] = useState(
    dashboardCardsInitialData
  );

  const [dashboardPieData, setDashboardPieData] = useState(
    dashboardPieInitialData
  );

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

  return (
    <StateContext.Provider
      value={{
        dashboardData,
        setDashboardData,
        accumulatedRevenue,
        setAccumulatedRevenue,
        currentMonthRevenue,
        setCurrentMonthRevenue,
        dashboardCardsData,
        setDashboardCardsData,
        dashboardPieData,
        setDashboardPieData,
        getDashboardPieChartData,
        getAccumulatedRevenue,
        getCurrentMonthRevenue,
        getDashboardChartData,
        getDashboardCardsData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useDashboardContext = () => useContext(StateContext);
