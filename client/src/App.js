import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Footer, Sidebar, ThemeSettings, Navbar } from "./components";
import {
  Dashboard,
  Calendar,
  Kanban,
  Editor,
  ShiftsTable,
  InsertShifts,
  Register,
  Login,
} from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    isUserLogged,
    isRegisterSuccess,
    //getAllShiftData,
  } = useStateContext();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("In Use Effect");
    console.log("IsUserLogged: " + isUserLogged);
    if (!isUserLogged && !isRegisterSuccess) {
      navigate("/register");
    }
    if (!isUserLogged && isRegisterSuccess) {
      navigate("login");
    } else if (isUserLogged) {
      navigate("/dashboard");
    }
  }, [isUserLogged, isRegisterSuccess]);

  return (
    <div className={currentMode === "Dark" ? "dark font-body" : "font-body"}>
      {isUserLogged ? (
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                onClick={() => setThemeSettings(true)}
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
        ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Pages */}
                <Route path="/shifts table" element={<ShiftsTable />} />
                {/* Apps */}
                {/*
          <Route path="/kanban" element={<Kanban />} />
          */}
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
