const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
