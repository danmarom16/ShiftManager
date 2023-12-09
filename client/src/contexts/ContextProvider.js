import React, { createContext, useContext, useState } from "react";
import { useThemeContext } from "./ThemeContextProvider.js";
import { useDashboardContext } from "./DashboardContextProvider.js";
import { useShiftsTableContext } from "./ShiftsTableContextProvider.js";
import { useCalendarContext } from "./CalendarContextProvider.js";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // IMPORT CONTEXTS
  const themeContextValues = useThemeContext();
  const dashboardContextValues = useDashboardContext();
  const shiftsTableContextValues = useShiftsTableContext();
  const calendarContextValues = useCalendarContext();

  // GLOBAL DEFINITIONS
  const [updateNumber, setUpdateNumber] = useState(0);
  const forceUpdate = () => {
    setUpdateNumber(updateNumber + 1);
  };

  return (
    <StateContext.Provider
      value={{
        ...themeContextValues,
        ...dashboardContextValues,
        ...shiftsTableContextValues,
        ...calendarContextValues,
        forceUpdate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
