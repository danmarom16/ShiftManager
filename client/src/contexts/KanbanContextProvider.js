import React, { createContext, useContext, useState } from "react";
import { taskInitialData } from "../data/Utils";
import { KanbanApiService } from "../services/api_services/KanbanApiService";

const StateContext = createContext();

export const KanbanContextProvider = ({ children }) => {
  const [isKanbanAddDialogOpen, setIsKanbanAddDialogOpen] = useState(false);
  const [taskId, setTaskId] = useState(1);
  const [taskData, setTaskData] = useState(taskInitialData);
  const [taskSummary, setTaskSummary] = useState(""); // Add state for task summary

  const postAddNewTask = async () => {
    try {
      const res = await KanbanApiService.postAddNewTask(taskData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getKanbanData = async (date) => {
    try {
      const data = await KanbanApiService.getKanbanData(date);
      setTaskData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StateContext.Provider
      value={{
        isKanbanAddDialogOpen,
        setIsKanbanAddDialogOpen,
        taskId,
        setTaskId,
        taskData,
        setTaskData,
        taskSummary,
        setTaskSummary,
        postAddNewTask,
        getKanbanData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useKanbanContext = () => useContext(StateContext);
