import Shift from "../models/Shift.js";
import express from "express";
import mongoose from "mongoose";

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
    console.log(req.body);
    const newShift = await Shift.create(req.body);
    res.status(200).json({ message: "Ok", data: newShift });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

/*POST - update shift */
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
      return res.status(404).json({ message: "Shift not found" });
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
      res.status(200).json({ message: "Shift Deleted" });
    } else {
      res.status(404).json({ message: "Did not found shift" });
    }
  } catch (error) {
    console.log(err);
    res.status(402).json({ message: "Unknown error occured" });
  }
};

// DELETE MANY SHIFTS
// TODO
export const postDeleteManyShifts = async (req, res) => {
  try {
    const idList = req.body.idList;
    const idListObj = [];
    idList.map((id) => idListObj.push(new mongoose.Types.ObjectId(id)));
    const result = await Shift.deleteMany({ _id: { $in: idListObj } });
    console.log(result);
    if (result.deletedCount > 1) {
      res.status(200).json({ message: "All Shifts has been deleted" });
    } else {
      res.status(404).json({ message: "One or more shift has not been found" });
    }
  } catch (error) {
    console.log(err);
    res.status(402).json({ message: "Unknown error occured" });
  }
};
