import mongoose from "mongoose";

const ShiftSchema = new mongoose.Schema({
  date:{
    type: Date,
    required: true,
  },
  day:{
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  length:{
    type: String,
    required: true,
  },
});

const Shift = mongoose.model("Shift", ShiftSchema);
export default Shift;