import React, { createContext, useContext, useState } from "react";
import { shiftApiService } from "../services/api_services/ShiftApiService";
import { csvUploadService } from "../services/file_upload_service/CsvUploadService";

const StateContext = createContext();
export const ShiftsTableContextProvider = ({ children }) => {
  // FOR DIALOG CONTROL(OPEN/CLOSE)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isCsvUploadDialogOpen, setIsCsvUploadDialogOpen] = useState(false);
  const [isTypeDialogOpen, setIsTypeDialogOpen] = useState(false);
  const [isFilteringDialogOpen, setIsFilteringDialogOpen] = useState(false);

  //
  const [shiftsData, setShiftsData] = useState([]);
  const [dialogData, setDialogData] = useState({});
  const [toDeleteData, setToDeleteData] = useState({});
  const [type, setType] = useState();
  const [enterTime, setEnterTime] = useState();
  const [exitTime, setExitTime] = useState();
  const [filterMonth, setFilterMonth] = useState();
  const [filteredShiftsData, setFilteredShiftsData] = useState([]);
  const [formData, setFormData] = useState({});

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
  return (
    <StateContext.Provider
      value={{
        // DIALOG RELATED
        isEditDialogOpen,
        setIsEditDialogOpen,
        isAddDialogOpen,
        setIsAddDialogOpen,
        isDeleteDialogOpen,
        setIsDeleteDialogOpen,
        isCsvUploadDialogOpen,
        setIsCsvUploadDialogOpen,
        isTypeDialogOpen,
        setIsTypeDialogOpen,
        isFilteringDialogOpen,
        setIsFilteringDialogOpen,

        // DATA RELATED
        shiftsData,
        setShiftsData,
        dialogData,
        setDialogData,
        toDeleteData,
        setToDeleteData,
        type,
        setType,
        enterTime,
        setEnterTime,
        exitTime,
        setExitTime,
        filterMonth,
        setFilterMonth,
        filteredShiftsData,
        setFilteredShiftsData,
        formData,
        setFormData,

        // FUNCTIONS
        getAllShiftData,
        postOneShift,
        postEditShift,
        deleteOneShift,
        deleteManyShifts,
        loadFile,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useShiftsTableContext = () => useContext(StateContext);
