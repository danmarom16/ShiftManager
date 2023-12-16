import mongoose from "mongoose";
import { sanitizer } from "../services/sanitizer";
import User from "../models/User";

export const postCreateUser = async (req, res) => {
  try {
    const rawUserData = req.body;
    const sanitizedUserData = sanitizer.sanitizeNewUser(rawUserData);
    const existingUser = await User.findOne({ email: sanitizedUserData.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const newUser = new User({
      name: sanitizedUserData.name,
      email: sanitizedUserData.email,
    });
    newUser.setPassword(sanitizedUserData.password);
    const newUserDocument = newUser.save();
    console.log(newUserDocument);
    
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
