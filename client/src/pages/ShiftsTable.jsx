import React, { useEffect } from "react";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import AddDialog from "./costumDialogs/shiftDialogs/AddDialog";
import EditDialog from "./costumDialogs/shiftDialogs/EditDialog";
import DeleteDialog from "./costumDialogs/shiftDialogs/DeleteDialog";
import UploadCsvDialog from "./costumDialogs/shiftDialogs/UploadCsvDialog";
import TypeDialog from "./costumDialogs/shiftDialogs/TypeDialog";
import FilteringDialog from "./costumDialogs/shiftDialogs/FilteringDialog";
import ShiftGrid from "../components/ShiftGrid";

const ShiftsTable = () => {
  const {
    forceUpdate,
    getAllShiftData,
    isEditDialogOpen,
    isAddDialogOpen,
    isDeleteDialogOpen,
    isCsvUploadDialogOpen,
    isTypeDialogOpen,
    isFilteringDialogOpen,
    filteredShiftsData,
  } = useStateContext();

  useEffect(() => getAllShiftData(), []);

  useEffect(() => {
    forceUpdate();
  }, [filteredShiftsData]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Shifts Table" />
      <ShiftGrid />
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
