import React, { createContext, useContext, useState } from "react";
import { CalendarApiService } from "../services/api_services/CalendarApiService";

const StateContext = createContext();

export const CalendarContextProvider = ({ children }) => {
  const [calendarData, setCalendarData] = useState();
  const getCalendarData = async () => {
    try {
      const data = await CalendarApiService.getCalendarData();
      setCalendarData(data);
    } catch (error) {
      console.error("Error fetching shift data:", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        calendarData,
        setCalendarData,
        getCalendarData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useCalendarContext = () => useContext(StateContext);
