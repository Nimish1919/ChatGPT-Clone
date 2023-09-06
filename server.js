// ISME HUM SERVER CREATE KRENGE AND VOH EXPRESS KI HELP SE HOGA

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errormiddleware");
const openAIRoutes = require("./routes/openAIRoutes");
// dotenv
dotenv.config();

// MongoDB connection
connectDB();

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json()); // JSON data ko transfer kr skte h
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

//API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openAI", openAIRoutes);

// listen
const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
      .black
  );
});
