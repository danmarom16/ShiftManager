import mongoose from "mongoose";

const ShiftSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  date: {
    type: Date,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  enterTime: {
    type: String,
    required: true,
  },
  exitTime: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Shift = mongoose.model("Shift", ShiftSchema);
export default Shift;
