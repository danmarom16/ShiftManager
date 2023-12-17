import React, { useEffect } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

export const FilteringDialog = () => {
  const {
    dialogData,
    filterMonth,
    setFilterMonth,
    setIsFilteringDialogOpen,
    updateFilteredData,
    shiftsData,
    filteredShiftsData,
    setFilteredShiftsData,
    forceUpdate,
  } = useStateContext();

  const filter = (e) => {
    e.preventDefault();
    const filteredData = shiftsData.filter((shift) => {
      const dateParts = shift.date.split("-");
      const month = dateParts[1] + "-" + dateParts[2];
      console.log(month);
      console.log(filterMonth);
      return month == filterMonth;
    });
    setFilteredShiftsData(filteredData);
    setIsFilteringDialogOpen(false);
  };

  const datePickerOnChange = (props) => {
    const tempDate = new Date(props.value);
    const month = String(tempDate.getMonth() + 1);
    const year = tempDate.getFullYear();
    const date = `${month}-${year}`;
    setFilterMonth(date);
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0  h-full w-full bg-black bg-opacity-50 z-50">
      <div
        className=" w-96 flex flex-cols justify-center gap-8 flex-col items-center max-w-4xl sm:m-4 m-2 sm:p-10 p-5 rounded-lg bg-white"
        style={{ opacity: 1 }}
      >
        <h1 className="text-3xl font-bold">Shift Details:</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div>Pick a Month</div>
            <div className="p-1 border rounded">
              <DatePickerComponent
                format="MMM yyyy"
                openOnFocus={true}
                change={datePickerOnChange}
                start="Decade"
                depth="Year"
              />
            </div>
          </div>
          <div className="flex justify-between w-full gap-5">
            <button
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => {
                setIsFilteringDialogOpen(false); // Close your custom dialog
              }}
            >
              Cancel
            </button>
            <button
              className="w-full bg-green-600 px-4 py-2 rounded-md text-white"
              onClick={filter}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteringDialog;
