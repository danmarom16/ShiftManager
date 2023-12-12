import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { DashboardContextProvider } from "./contexts/DashboardContextProvider";
import { ShiftsTableContextProvider } from "./contexts/ShiftsTableContextProvider";
import { CalendarContextProvider } from "./contexts/CalendarContextProvider";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
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
      </ThemeContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
