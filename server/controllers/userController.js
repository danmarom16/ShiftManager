import mongoose from "mongoose";
import { sanitizer } from "../services/sanitizer.js";
import User from "../models/User.js";

export const postCreateUser = async (req, res) => {
  try {
    const rawUserData = req.body;
    const sanitizedUserData = sanitizer.sanitizeNewUser(rawUserData);
    const existingEmail = await User.findOne({
      email: sanitizedUserData.email,
    });

    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const newUser = new User({
      username: sanitizedUserData.username,
      email: sanitizedUserData.email,
    });

    newUser.setPassword(sanitizedUserData.password);
    const newUserDocument = await newUser.save();
    console.log(newUserDocument);

    return res.status(201).json({  message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const postLoginUser = async (req, res) => {
  try {
    const rawUserData = req.body;
    console.log(rawUserData);
    const sanitizedUserData = sanitizer.sanitizeNewUser(rawUserData);

    const existingEmailUser = await User.findOne({
      email: sanitizedUserData.email,
    });

    const id = existingEmailUser._id;
    if (
      existingEmailUser &&
      existingEmailUser.validatePassword(sanitizedUserData.password)
    ) {
      res.status(200).json({ message: "User Logged in successfully", id:id});
    } else {
      res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
