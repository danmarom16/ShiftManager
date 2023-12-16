import express from "express";
import { postCreateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", postCreateUser);

export default router;
