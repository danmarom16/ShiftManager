import React, { useEffect } from "react";
import { useStateContext } from '../../../contexts/ContextProvider';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

export const KanbanAddDialog = () => {
  const {
    setIsKanbanAddDialogOpen,
    taskId,
    setTaskId,
    taskData,
    setTaskData,
    taskSummary,
    setTaskSummary,
    postAddNewTask,
  } = useStateContext();

  const statusOnChange = (props) => {
    console.log("In Status");
    setTaskData({ ...taskData, Status: props.value });
  };

  const priorityOnChange = (props) => {
    console.log("In Priority");

    setTaskData({ ...taskData, Priority: props.value });
  };

  const datePickerOnChange = (props) => {
    console.log("In Date");

    const tempDate = new Date(props.value);
    const day = String(tempDate.getDate()).padStart(2, "0");
    const month = String(tempDate.getMonth() + 1).padStart(2, "0");
    const year = tempDate.getFullYear();
    const date = `${day}-${month}-${year}`;
    setTaskData({ ...taskData, date: date });
  };

  const taskSummaryOnChange = (props) => {
    const summary = props.value;
    if (summary.length <= 5) {
      setTaskSummary(summary);
      setTaskData({ ...taskData, Summary: summary });
    }
  };

  const addNewTask = (props) => {
    postAddNewTask(props);
    setTaskId(taskId + 1);
    setIsKanbanAddDialogOpen(false);
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className=" w-96 flex flex-cols justify-center gap-8 flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white"
        style={{ opacity: 1 }}
      >
        <h1 className="text-3xl font-bold">Add Task</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div>Date</div>
            <div className="p-1 border rounded">
              <DatePickerComponent
                format="dd-MM-yyyy"
                placeholder="Select Date"
                openOnFocus={true}
                change={datePickerOnChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Status</div>
            <div className="p-1 border rounded">
              <DropDownListComponent
                placeholder="Select Status"
                dataSource={["Open", "InProgress", "Done"]}
                change={statusOnChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Priority</div>
            <div className="p-1 border rounded">
              <DropDownListComponent
                placeholder="Select Priority"
                dataSource={["Low", "Medium", "High", "Critical"]}
                change={priorityOnChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Summary</div>
            <div className="p-1 border rounded">
              {/* LIMIT TO 100 WORDS */}
              <TextBoxComponent
                placeholder="Insert Task Description"
                dataSource={taskSummary}
                input={taskSummaryOnChange}
              />
            </div>
          </div>
          <div className="flex justify-between w-full gap-5">
            <button
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => {
                setIsKanbanAddDialogOpen(false); // Close your custom dialog
              }}
            >
              Cancel
            </button>
            <button
              className="w-full bg-green-600 px-4 py-2 rounded-md text-white"
              onClick={addNewTask}
            >
              Update Shift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanAddDialog;
