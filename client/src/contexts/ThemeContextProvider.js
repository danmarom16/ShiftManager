
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
    userProfile: false,
    notification: false,
  };

  export const ThemeContextProvider = ({children}) => {


  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);  

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

  const handleClick = (clicked) =>
  setIsClicked({ ...initialState, [clicked]: true });

  return(
    <StateContext.Provider value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        handleClick,
    }} >

        {children}
    </StateContext.Provider>
  );
}

  export const useThemeContext = () => useContext(StateContext);
