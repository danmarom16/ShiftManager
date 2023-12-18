import React, { createContext, useContext, useState } from "react";
import { useThemeContext } from "./ThemeContextProvider.js";
import { useDashboardContext } from "./DashboardContextProvider.js";
import { useShiftsTableContext } from "./ShiftsTableContextProvider.js";
import { useCalendarContext } from "./CalendarContextProvider.js";
import { useKanbanContext } from "./KanbanContextProvider.js";
import { useUserContext } from "./UserContextProvider.js";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  
  // IMPORT CONTEXTS
  const userContextValues = useUserContext();
  const themeContextValues = useThemeContext();
  const dashboardContextValues = useDashboardContext();
  const shiftsTableContextValues = useShiftsTableContext(userContextValues.loggedUserID);
  const calendarContextValues = useCalendarContext();
  const kanbanContextValues = useKanbanContext();
  // GLOBAL DEFINITIONS
  const [updateNumber, setUpdateNumber] = useState(0);
  const forceUpdate = () => {
    setUpdateNumber(updateNumber + 1);
  };

  return (
    <StateContext.Provider
      value={{
        ...userContextValues,
        ...themeContextValues,
        ...dashboardContextValues,
        ...shiftsTableContextValues,
        ...calendarContextValues,
        ...kanbanContextValues,
        forceUpdate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
