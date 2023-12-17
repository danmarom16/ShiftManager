import React, { useEffect } from "react";
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-kanban";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { KanbanAddDialog } from "./costumDialogs/shiftDialogs/KanbanAddDialog";

const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },
  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },
  { headerText: "Done", keyField: "Done", allowToggle: true },
];

const kanbanData = [
  {
    Id: "Task 1",
    Status: "Open",
    Summary: "Analyze the new requirements gathered from the customer.",
    Priority: "Low",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-nancy-davloio",
  },
];

const Kanban = () => {
  const {
    currentColor,
    isKanbanAddDialogOpen,
    setIsKanbanAddDialogOpen,
    taskId,
    setTaskId,
    taskData,
    setTaskData,
    getKanbanData,
  } = useStateContext();

  useEffect(()=>{
    getKanbanData(new Date())
  },[])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <div
        onClick={() => {
          setIsKanbanAddDialogOpen(true);
        }}
        className="text-center text-white p-4 rounded-lg font-semibold mb-14"
        style={{ backgroundColor: currentColor }}
      >
        <button type="button">Add New Task</button>
      </div>
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
      {isKanbanAddDialogOpen && <KanbanAddDialog />}
    </div>
  );
};

export default Kanban;
