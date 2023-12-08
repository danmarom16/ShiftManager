import Shift from '../models/Shift.js';
import { dataService } from '../services/dataService.js';

export const getCalendarData = async (req, res)=> {
	try {
		const shiftsData = await Shift.find(); // Gets data from mongo
		const calendarData =  dataService.formatCalendarData(shiftsData);
		res.status(200).json(calendarData);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: 'Not Found' });
	}
}