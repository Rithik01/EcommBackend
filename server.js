require("dotenv").config();
const express = require("express");
const connectDB = require("./db/conn.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

const connectDatabase = async () => {
  try {
    await connectDB(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to mongodb");
  }
};

connectDatabase();
