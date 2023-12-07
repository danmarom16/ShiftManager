import React, { useState, useEffect, useRef } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { shiftsGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import AddDialog from "./costumDialogs/AddDialog";
import EditDialog from "./costumDialogs/EditDialog";
import DeleteDialog from "./costumDialogs/DeleteDialog";
import UploadCsvDialog from "./costumDialogs/UploadCsvDialog";
import TypeDialog from "./costumDialogs/TypeDialog";
import { DataUtil } from "@syncfusion/ej2-data";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import FilteringDialog from "./costumDialogs/FilteringDialog";

const ACTION_TYPE = {
  ADD: "add",
  EDIT: "beginEdit",
  DELETE: "delete",
};

const ShiftsTable = () => {
  const {
    shiftsData,
    forceUpdate,
    getAllShiftData,
    isEditDialogOpen,
    setIsEditDialogOpen,
    setDialogData,
    setToDeleteData,
    isAddDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    isCsvUploadDialogOpen,
    setIsCsvUploadDialogOpen,
    isTypeDialogOpen,
    setIsTypeDialogOpen,
    updateFilteredData,
    isFilteringDialogOpen,
    setIsFilteringDialogOpen,
    filteredShiftsData,
    setFilteredShiftsData,
  } = useStateContext();

  const grid = useRef(null);
  const selectionsettings = {
    type: "Multiple",
    mode: "Both",
  };

  const toolbarOptions = [
    { text: "Add" },
    { text: "Edit" },
    { text: "Delete" },
    {
      text: "Upload CSV File",
      tooltipText: "Upload CSV File",
      prefixIcon: "e-add",
      id: "csv_upload",
    },
    {
      text: "Monthly Filtering",
      tooltipText: "Monthly Filtering",
      prefixIcon: "e-filter",
      id: "filter",
    },
    {
      text: "Clear Filtering",
      tooltipText: "Clear Filtering",
      prefixIcon: "e-delete",
      id: "clear",
    },
  ];

  const editing = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: "Dialog",
  };

  const paging = {
    pageSize: 20,
  };

  const toolbarClickHandler = (args) => {
    if (args.item.properties.id === "csv_upload") {
      setIsCsvUploadDialogOpen(true);
    }
    if (args.item.properties.id === "filter") {
      setIsFilteringDialogOpen(true);
    }
    if (args.item.properties.id === "clear") {
      console.log("InClear");
      setFilteredShiftsData(shiftsData);
      forceUpdate();
    }
  };

  const onActionBegin = (args) => {
    if (args.requestType === ACTION_TYPE.EDIT) {
      args.cancel = true;
      setDialogData(args.rowData);
      setIsEditDialogOpen(true);
    }
    if (args.requestType === ACTION_TYPE.ADD) {
      args.cancel = true;
      setIsTypeDialogOpen(true);
    }
    if (args.requestType === ACTION_TYPE.DELETE) {
      args.cancel = true;
      setToDeleteData(args.data);
      setIsDeleteDialogOpen(true);
    }
  };

  useEffect(() => getAllShiftData(), []);
  useEffect(() => {
    forceUpdate();
  }, [filteredShiftsData]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Shifts Table" />
      <div className="overflow-y-auto" style={{ height: "70vh" }}>
        <GridComponent
          id="gridcomp"
          dataSource={filteredShiftsData}
          ref={(g) => (grid.current = g)}
          allowPaging
          allowSorting
          allowSelection
          selectionSettings={selectionsettings}
          pageSettings={paging}
          editSettings={editing}
          toolbar={toolbarOptions}
          toolbarClick={toolbarClickHandler}
          actionBegin={onActionBegin}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="checkbox"
              width="50"
              type="checkbox"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="date"
              headerText="Date"
              width="150"
              editType="dropdownedit"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="day"
              headerText="Day"
              width="150"
              editType="dropdownedit"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="type"
              headerText="Type"
              width="150"
              editType="dropdownedit"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="enterTime"
              headerText="Enter Time"
              width="150"
              editType="dropdownedit"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="exitTime"
              headerText="Exit Time"
              width="150"
              editType="dropdownedit"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="length"
              headerText="Length"
              width="150"
              editType="dropdownedit"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
            <ColumnDirective
              field="totalAmount"
              headerText="Total Amount(₪)"
              width="150"
              textAlign="Center"
              allowFiltering={false}
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page, ExcelExport, Edit, PdfExport, Toolbar]} />
        </GridComponent>
      </div>
      <div></div>
      {isEditDialogOpen && <EditDialog />}
      {isTypeDialogOpen && <TypeDialog />}
      {isAddDialogOpen && <AddDialog />}
      {isDeleteDialogOpen && <DeleteDialog />}
      {isCsvUploadDialogOpen && <UploadCsvDialog />}
      {isFilteringDialogOpen && <FilteringDialog />}
    </div>
  );
};

export default ShiftsTable;
