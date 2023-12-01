import axios from 'axios';
import { formaterService } from '../formaterService.js';

/* URL CONSTS */
const baseURL = 'http://localhost:5000';
const apiShiftRoute = '/api/shift';

// GET - gets dashboard cards data
const getDashboardCardsData = async () => {
	const url = baseURL + apiShiftRoute + '/dashboardCardsData';
	return axios
		.get(url)
		.then((res) => res.data)
		.catch((error) => {
			throw error;
		});
};

// GET - gets dashboard Data
const getDashboardData = async () => {
	const url = baseURL + apiShiftRoute + '/dashboardData';
	return axios
		.get(url)
		.then((res) => res.data)
		.catch((error) => {
			throw error;
		});
};

// GET - gets all shiftData
const getAll = async () => {
	const url = baseURL + apiShiftRoute + '/shiftData';
	return axios
		.get(url)
		.then(async (res) => {
			return formaterService.formatToGrid(res.data);
		})
		.catch((error) => {
			throw error;
		});
};

// POST - insert one shift
const postOne = async (shiftData) => {
	console.log('INPOST');
	console.log(shiftData);
	const url = baseURL + apiShiftRoute + '/insertShift';
	return axios
		.post(url, shiftData)
		.then((res) => res.status)
		.catch((error) => {
			throw error;
		});
};

// POST - edit ONE shift
const editOne = async (updatedData) => {
	const url = baseURL + apiShiftRoute + '/updateShift';
	return axios
		.post(url, updatedData)
		.then((res) => res.status)
		.catch((error) => {
			throw error;
		});
};

// POST - delete ONE shift
const deleteOne = async (toDeleteData) => {
	console.log(toDeleteData);
	const idObj = { id: toDeleteData[0]['_id'] };
	const url = baseURL + apiShiftRoute + '/deleteOneShift';
	return axios
		.post(url, idObj)
		.then((res) => res.status)
		.catch((error) => {
			throw error;
		});
};

// POST - delete MANY shifts
const deleteMany = async (toDeleteData) => {
	console.log(toDeleteData);
	const url = baseURL + apiShiftRoute + '/deleteManyShifts';
	const idList = [];
	for (var i = 0; i < toDeleteData.length; i++) {
		idList.push(toDeleteData[i]['_id']);
	}
	const payload = { idList: idList };
	return axios
		.post(url, payload)
		.then((res) => res.status)
		.catch((error) => {
			throw error;
		});
};

// POST - insert MANY shifts from CSV file
const insertFromCsv = async (csvData) => {
	const url = baseURL + apiShiftRoute + '/upload_csv';
	return axios
		.post(url, csvData)
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
	baseURL,
	apiShiftRoute,
	insertFromCsv,
	getDashboardData,
	getDashboardCardsData,
};
