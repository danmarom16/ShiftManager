import express from "express";
import {
  postCreateUser,
  postLoginUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", postCreateUser);
router.post("/login", postLoginUser);

export default router;
