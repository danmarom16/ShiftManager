import Shift from '../models/Shift.js';
import mongoose from 'mongoose';
import { dataService } from '../services/dataService.js';

export const getDashboardCardsData = async (req, res) => {
	try {
		const shiftsData = await Shift.find(); // Gets data from mongo
		const cardsData = await dataService.getCardsData(shiftsData);
		res.status(200).json(cardsData);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: 'Not Found' });
	}
};

export const getDashboardData = async (req, res) => {
	try {
		const shiftsData = await Shift.find(); // Gets data from mongo
		const data = await dataService.getMonthlySalary(shiftsData);
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: 'Not Found' });
	}
};

/* POST - insert all shifts from already proccessed to json csv file */
export const postUploadCSV = async (req, res) => {
	try {
		const data = await dataService.formateCsvData(req.body);
		const response = await Shift.insertMany(data).catch((error) =>
			console.log(error)
		);
		console.log(response);
		res.status(200).json({ message: 'Upload was succesfull' });
	} catch (error) {
		res.status(403).json({ message: 'Could not upload' });
	}
};

/* GET - get all shifts data */
export const getShiftData = async (req, res) => {
	try {
		const data = await Shift.find();
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

/* POST - insert specific shift */
export const postInsertShift = async (req, res) => {
	try {
		const data = await dataService.formateSingleShift(req.body);
		const newShift = await Shift.create(data);
		res.status(200).json({ message: 'Ok', data: newShift });
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error });
	}
};

/* POST - update shift */
export const postUpdateShift = async (req, res) => {
	const data = req.body;
	const documentId = new mongoose.Types.ObjectId(data._id);
	try {
		const updatedShift = await Shift.findOneAndUpdate(
			{ _id: documentId }, // Filter for finding the shift
			data, // Update the shift with the data from the request body
			{ new: true } // To return the updated document
		);
		if (!updatedShift) {
			// Handle the case when no shift is found with the given date and day
			return res.status(404).json({ message: 'Shift not found' });
		}
		res.status(200).json({ message: `Updated Shift Data\n${updatedShift}` });
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error });
	}
};

/* POST - DELETE */
// DELETE ONE SHIFT
export const postDeleteOneShift = async (req, res) => {
	try {
		const id = req.body.id;
		const documentId = new mongoose.Types.ObjectId(id);
		const result = await Shift.deleteOne({ _id: documentId });
		console.log(result);
		if (result.deletedCount === 1) {
			res.status(200).json({ message: 'Shift Deleted' });
		} else {
			res.status(404).json({ message: 'Did not found shift' });
		}
	} catch (error) {
		console.log(err);
		res.status(402).json({ message: 'Unknown error occured' });
	}
};

// DELETE MANY SHIFTS
export const postDeleteManyShifts = async (req, res) => {
	try {
		const idList = req.body.idList;
		const idListObj = [];
		idList.map((id) => idListObj.push(new mongoose.Types.ObjectId(id)));
		const result = await Shift.deleteMany({ _id: { $in: idListObj } });
		console.log(result);
		if (result.deletedCount > 1) {
			res.status(200).json({ message: 'All Shifts has been deleted' });
		} else {
			res.status(404).json({ message: 'One or more shift has not been found' });
		}
	} catch (error) {
		console.log(err);
		res.status(402).json({ message: 'Unknown error occured' });
	}
};
