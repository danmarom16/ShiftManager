import axios from "axios";

const baseURL = "http://localhost:5000";
const kanbanRoute = "/api/kanban";

// GET ALL TASKS BY DATE
const getKanbanData = async (date) => {
  const url = baseURL + kanbanRoute + "/kanbanData";

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

  console.log(formattedDate);
  const fullUrl = `${url}/${formattedDate}`;
  return axios
    .get(fullUrl)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

// INSERT NEW TASK
const postAddNewTask = async (task) => {
  const url = baseURL + kanbanRoute + "/insertTask";
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const KanbanApiService = { getKanbanData, postAddNewTask };
