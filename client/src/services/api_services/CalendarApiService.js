import axios from "axios";

const baseURL = "http://localhost:5000";
const calendarRoute = "/api/calendar";

const getCalendarData = async () => {
  const url = baseURL + calendarRoute + "/calendarData";
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const CalendarApiService = { getCalendarData };
