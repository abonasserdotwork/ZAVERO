const mongoose = require("mongoose");

const dbLink = process.env.MONGO_URI;

const connectDB = async () => {
  try {

    await mongoose.connect(dbLink);
    console.log("Connected To DB Successfully");

  } catch (err) {

    console.error("Database connection failed:", err.message);
    throw err;
  }
};

module.exports = { connectDB };