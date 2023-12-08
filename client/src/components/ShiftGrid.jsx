import React, { useRef } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { useStateContext } from "../contexts/ContextProvider";

const ACTION_TYPE = {
  ADD: "add",
  EDIT: "beginEdit",
  DELETE: "delete",
};

const ShiftGrid = () => {
  const {
    shiftsData,
    forceUpdate,
    setIsEditDialogOpen,
    setDialogData,
    setToDeleteData,
    setIsDeleteDialogOpen,
    setIsCsvUploadDialogOpen,
    setIsTypeDialogOpen,
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

  return (
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
          ></ColumnDirective>
          <ColumnDirective
            field="date"
            headerText="Date"
            width="150"
            editType="dropdownedit"
            textAlign="Center"
          ></ColumnDirective>
          <ColumnDirective
            field="day"
            headerText="Day"
            width="150"
            editType="dropdownedit"
            textAlign="Center"
          ></ColumnDirective>
          <ColumnDirective
            field="type"
            headerText="Type"
            width="150"
            editType="dropdownedit"
            textAlign="Center"
          ></ColumnDirective>
          <ColumnDirective
            field="enterTime"
            headerText="Enter Time"
            width="150"
            editType="dropdownedit"
            textAlign="Center"
          ></ColumnDirective>
          <ColumnDirective
            field="exitTime"
            headerText="Exit Time"
            width="150"
            editType="dropdownedit"
            textAlign="Center"
          ></ColumnDirective>
          <ColumnDirective
            field="length"
            headerText="Length"
            width="150"
            editType="dropdownedit"
            textAlign="Center"
          ></ColumnDirective>
          <ColumnDirective
            field="totalAmount"
            headerText="Total Amount(₪)"
            width="150"
            textAlign="Center"
          ></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Page, ExcelExport, Edit, PdfExport, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default ShiftGrid;
