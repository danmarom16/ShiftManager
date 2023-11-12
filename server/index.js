import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shiftDataRoutes from './routes/shiftDataRoutes.js';
import cors from 'cors';
import Shift from "./models/Shift.js";

/* CONFIGURATION */
dotenv.config(); // to set up environment variables
const app = express();
const port = 5000;
app.use(express.json()); // invoke app
app.use(cors());
/* ROUTES */
app.use('/api/shift', shiftDataRoutes);
/** MONGOOSE SETUP */
//const PORT = process.env.PORT;
const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    /*ONLY ADD DATA ONE TIME */
    // Shift.insertMany([
    //   { date: new Date(Date.UTC(2023, 7, 16, 0, 0, 0)), day: "Sunday", type: "Morning", length: 6 },
    //   { date: new Date(Date.UTC(2023, 7, 17, 0, 0, 0)), day: "Monday", type: "Morning", length: 6 },
    //   { date: new Date(Date.UTC(2023, 7, 18, 0, 0, 0)), day: "Tuesday", type: "Morning", length: 4 },
    //   { date: new Date(Date.UTC(2023, 7, 19, 0, 0, 0)), day: "Wednesday", type: "Morning", length: 6 },
    // ]);
  })
  .catch((error) => console.log(`${error} did not connect`));
