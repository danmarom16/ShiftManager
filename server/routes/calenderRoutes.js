import { getCalendarData } from "../controllers/calendarController.js";
import express from 'express';

const router = express.Router();
router.get("/calendarData", getCalendarData);
export default router;
