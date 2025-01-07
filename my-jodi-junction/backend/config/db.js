const mongoose = require('mongoose');


require('dotenv').config();

const mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    // process.exit(1); 
  }
};

module.exports = connectDB;


