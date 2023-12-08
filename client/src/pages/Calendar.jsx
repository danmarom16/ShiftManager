import React, { useEffect } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

// TODO - Further Costumize it
const Calendar = () => {
  const { calendarData, getCalendarData } = useStateContext();

  useEffect(() => {
    getCalendarData();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        views={["Day", "Week", "Month"]}
        eventSettings={{ dataSource: calendarData }}
        selectedDate={new Date()}
        currentView="Month"
      >
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
