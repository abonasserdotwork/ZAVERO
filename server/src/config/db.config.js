const mongoose = require('mongoose');
const dbLink = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbLink).then(() => {
      console.log('Connected To DB Successfully');
    });
    mongoose.connection.on('error', () => {
      console.log('Error Occurred Cannot Connect To DB');
    });
  } catch (err) {
    console.error(err.message);
  }
};

connectDB();

module.exports = { connectDB };
