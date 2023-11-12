import { formatShiftDataToBE, formatShiftDataToFE } from "../../data/Utils";
import axios from "axios";

/* URL CONSTS */
const baseURL = "http://localhost:5000";
const apiShiftRoute = "/api/shift";

// GET - gets all shiftData
const getAll = async () => {
  const url = baseURL + apiShiftRoute + "/shiftData";
  return axios
    .get(url)
    .then((res) => formatShiftDataToFE(res.data))
    .catch((error) => {
      throw error;
    });
};

// POST - insert one shift
const postOne = async (shiftData) => {
  const url = baseURL + apiShiftRoute + "/insertShift";
  const formatedData = formatShiftDataToBE(shiftData);
  return axios
    .post(url, formatedData)
    .then((res) => res.status)
    .catch((error) => {
      throw error;
    });
};

// POST - edit one shift
const editOne = async (updatedData) => {
  const url = baseURL + apiShiftRoute + "/updateShift";
  const formatedData = formatShiftDataToBE(updatedData);
  return axios
    .post(url, formatedData)
    .then((res) => res.status)
    .catch((error) => {
      throw error;
    });
};

const deleteOne = async (toDeleteData) => {
  const idObj = { id: toDeleteData[0].Id };
  const url = baseURL + apiShiftRoute + "/deleteOneShift";
  return axios
    .post(url, idObj)
    .then((res) => res.status)
    .catch((error) => {
      throw error;
    });
};

const deleteMany = async (toDeleteData) => {
  console.log(toDeleteData);
  const url = baseURL + apiShiftRoute + "/deleteManyShifts";
  const idList = [];
  for (var i = 0; i < toDeleteData.length; i++) {
    idList.push(toDeleteData[i].Id);
  }
  const payload = { idList: idList };
  return axios
    .post(url, payload)
    .then((res) => res.status)
    .catch((error) => {
      throw error;
    });
};
export const shiftApiService = {
  getAll,
  postOne,
  editOne,
  deleteOne,
  deleteMany,
};
