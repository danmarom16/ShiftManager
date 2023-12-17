import express from 'express';
import {
	getShiftData,
	postInsertShift,
	postDeleteOneShift,
	postDeleteManyShifts,
	postUpdateShift,
	postUploadCSV,
	getDashboardData,
	getDashboardCardsData,
} from '../controllers/shiftDataController.js';

const router = express.Router();

router.get('/shiftData', getShiftData);
router.get('/dashboardData', getDashboardData);
router.get('/dashboardCardsData', getDashboardCardsData);
router.post('/insertShift', postInsertShift);
router.post('/deleteOneShift', postDeleteOneShift);
router.post('/deleteManyShifts', postDeleteManyShifts);
router.post('/updateShift', postUpdateShift);
router.post('/upload_csv', postUploadCSV);

export default router;
