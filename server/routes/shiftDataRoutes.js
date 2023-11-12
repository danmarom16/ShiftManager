import express from "express";
import {
  getShiftData,
  postInsertShift,
  postDeleteOneShift,
  postDeleteManyShifts,
  postUpdateShift,
} from "../controllers/shiftDataController.js";

const router = express.Router();
router.get("/shiftData", getShiftData);
router.post("/insertShift", postInsertShift);
router.post("/deleteOneShift", postDeleteOneShift);
router.post("/deleteManyShifts", postDeleteManyShifts);
router.post("/updateShift", postUpdateShift);
export default router;
