const mongoose = require('mongoose');
const tempLink =
  'mongodb+srv://abonasserwork_db_user:4E5GimTZibEnmS5n@zaverodb.lr54qez.mongodb.net/zvoDB?appName=zaveroDB';

const connectDB = async () => {
  try {
    await mongoose.connect(tempLink).then(() => {
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
