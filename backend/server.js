const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const noteRoutes = require("./routes/noteRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://promblem-pilot-46vk.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/problems', require('./routes/problemRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));
app.use("/uploads", express.static("uploads"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});