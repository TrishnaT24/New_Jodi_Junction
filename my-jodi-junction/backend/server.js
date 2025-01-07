const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); 
const authRouter=require('./routes/authRouter');
const PORT = process.env.PORT || 3000;
const app = express();

connectDB();


app.use(express.json());
app.use("/auth",authRouter);
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
