import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { DashboardContextProvider } from "./contexts/DashboardContextProvider";
import { ShiftsTableContextProvider } from "./contexts/ShiftsTableContextProvider";
import { CalendarContextProvider } from "./contexts/CalendarContextProvider";

ReactDOM.render(
  <ThemeContextProvider>
    <ShiftsTableContextProvider>
      <DashboardContextProvider>
        <CalendarContextProvider>
          <ContextProvider>
            <App />
          </ContextProvider>
        </CalendarContextProvider>
      </DashboardContextProvider>
    </ShiftsTableContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
