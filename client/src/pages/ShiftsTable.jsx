import React, { useState, useEffect } from "react";
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

const ACTION_TYPE = {
  ADD: "add",
  EDIT: "beginEdit",
  DELETE: "delete",
};

const ShiftsTable = () => {
  const {
    shiftsData,
    getAllShiftData,
    isEditDialogOpen,
    setIsEditDialogOpen,
    dialogData,
    setDialogData,
    toDeleteData,
    setToDeleteData,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
  } = useStateContext();

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
  ];

  const editing = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: "Dialog",
  };

  const onActionBegin = (args) => {
    console.log(args);
    if (args.requestType === ACTION_TYPE.EDIT) {
      args.cancel = true;
      setDialogData(args.rowData);
      setIsEditDialogOpen(true);
    }
    if (args.requestType === ACTION_TYPE.ADD) {
      args.cancel = true;
      setIsAddDialogOpen(true);
    }
    if (args.requestType === ACTION_TYPE.DELETE) {
      args.cancel = true;
      setToDeleteData(args.data);
      setIsDeleteDialogOpen(true);
    }
  };

  useEffect(() => getAllShiftData(), []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Shifts Table" />
      <GridComponent
        id="gridcomp"
        dataSource={shiftsData}
        allowPaging
        allowSorting
        allowSelection
        selectionSettings={selectionsettings}
        editSettings={editing}
        toolbar={toolbarOptions}
        actionBegin={onActionBegin}
      >
        <ColumnsDirective>
          {shiftsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar,
          ]}
        />
      </GridComponent>
      {isEditDialogOpen && <EditDialog />}
      {isAddDialogOpen && <AddDialog />}
      {isDeleteDialogOpen && <DeleteDialog />}
    </div>
  );
};

export default ShiftsTable;
