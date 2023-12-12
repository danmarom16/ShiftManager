import { getKanbanData } from "../controllers/kanbanController.js";
import express from "express";

const router = express.Router();
router.get("/kanbanData/:date", getKanbanData);
export default router;
