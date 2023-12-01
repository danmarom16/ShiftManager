import { shiftApiService } from '../api_services/ShiftApiService';

const load = (args) => {
	return new Promise((resolve, reject) => {
		const fileData = args.filesData[0];
		const dataObject = { data: {}, fileName: {} };
		if (!fileData || !fileData.rawFile) {
			console.error('Invalid file data');
			reject('Invalid file data');
		}
		const reader = new FileReader();

		reader.onload = (event) => {
			const fileContent = event.target.result;
			const fileName = fileData.name;
			dataObject.data = format(fileContent);
			dataObject.fileName = fileName;
			resolve(dataObject);
		};

		reader.onerror = (error) => {
			console.error('Error reading the file:', error);
			reject(error);
		};

		reader.readAsText(fileData.rawFile);
	});
};
const format = (rawStringData) => {
	console.log('In format');
	console.log(rawStringData);
	const lines = rawStringData.split('\r\n');
	if (lines.length < 2) {
		console.error('Invalid input data');
		return null;
	}
	const columns = lines[0].split(',');
	const shifts = lines.slice(1).map((line) => {
		const values = line.split(',');
		const shift = {};
		columns.forEach((column, index) => {
			shift[column] = values[index];
		});
		return shift;
	});

	return { columns, shifts };
};
const path = {
	saveUrl:
		shiftApiService.baseURL + shiftApiService.apiShiftRoute + '/upload_csv',
	removeUrl:
		shiftApiService.baseURL + shiftApiService.apiShiftRoute + '/remove_csv',
};

export const csvUploadService = { load, path, format };
