import React, { createContext, useContext, useState } from "react";
import { formatShiftDataToBE, formatShiftDataToFE } from "../data/Utils";
import { shiftApiService } from "../services/api_services/ShiftApiService.js";
import axios from "axios";
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

  // FOR MODAL CONTROL
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // FOR DIALOG DATA TRANSMISSION
  const [shiftsData, setShiftsData] = useState([]);
  const [dialogData, setDialogData] = useState({});
  const [toDeleteData, setToDeleteData] = useState({});
  const [userID, setUserID] = useState("650d62a9699a8e9247279e9b");
  const [updateNumber, setUpdateNumber] = useState(0);


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
  // GET ALL DATA
  const getAllShiftData = async () => {
    try {
      const data = await shiftApiService.getAll(); //uses shiftApi service to decouple context provider from api logic
      setShiftsData(data);
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


  
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const forceUpdate = () => {
    setUpdateNumber(updateNumber + 1);
    console.log("In force update");
  };

  return (
    <StateContext.Provider
      value={{
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
