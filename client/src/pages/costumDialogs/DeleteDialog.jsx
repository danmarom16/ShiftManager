import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { useStateContext } from "../../contexts/ContextProvider";
import { calculateTotalAmount } from "../../data/Utils";

const DeleteDialog = () => {
  const {
    toDeleteData,
    setToDeleteData,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    forceUpdate,
    deleteOneShift,
    deleteManyShifts,
  } = useStateContext();

  const deleteShift = (e) => {
    console.log(toDeleteData);
    if (toDeleteData.length > 1) {
      deleteManyShifts();
    } else {
      deleteOneShift();
    }
    setIsDeleteDialogOpen(false);
    forceUpdate();
  };

  const disableActiveCheckboxes = () => {
    const shiftGridDataTableRows = document.getElementById(
      "gridcomp_content_table"
    );
    const rows = shiftGridDataTableRows.rows;
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].cells;
      const checkbox = cells[0];
      if (checkbox.classList.contains("e-active")) {
        checkbox.click();
      }
    }
  };
  const cancelDelete = (e) => {
    disableActiveCheckboxes();
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="  flex justify-center items-center fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className="h-1/2 flex flex-cols justify-center gap-8 flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white"
        style={{ opacity: 1 }}
      >
        <h1 className="text-2xl font-bold">
          Are you sure you want to delete the following shifts?:
        </h1>
        <div className="flex flex-wrap gap-10 overflow-y-auto">
          {toDeleteData.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-3 border rounded-lg px-10 py-5"
                key={index}
              >
                <h2 className="text-lg font-bold underline">
                  Shift #{index + 1} :
                </h2>
                <div className="flex flex-col gap-1">
                  <div>Date</div>
                  <div className="p-1 border rounded">{item.Date}</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>Day</div>
                  <div className="p-1 border rounded">{item.Day}</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>Type</div>
                  <div className="p-1 border rounded">{item.Type}</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>Length</div>
                  <div className="p-2 border rounded">{item.Length}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between w-1/2 gap-5">
          <button
            className="w-full bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              cancelDelete();
              setIsDeleteDialogOpen(false); // Close your custom dialog
            }}
          >
            Cancel
          </button>
          <button
            className="w-full bg-green-600 px-4 py-2 rounded-md text-white"
            onClick={deleteShift}
          >
            Delete Shifts
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
