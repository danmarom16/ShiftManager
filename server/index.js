import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shiftDataRoutes from "./routes/shiftDataRoutes.js";
import cors from "cors";
import Shift from "./models/Shift.js";
import calendarRoutes from "./routes/calenderRoutes.js";
import kanbanRoutes from "./routes/kanbanRoutes.js";

/* CONFIGURATION */
dotenv.config(); // to set up environment variables
const app = express();
const port = 5000;
app.use(express.json()); // invoke app
app.use(cors());

/* ROUTES */
app.use("/api/shift", shiftDataRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/kanban", kanbanRoutes);

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
  })
  .catch((error) => console.log(`${error} did not connect`));
