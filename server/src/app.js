require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/error.middleware');
const { connectDB } = require('./config/db.config');
const PORT = process.env.PORT || 5000;
const originLINK = process.env.CLIENT_URL;
const cookieParser = require("cookie-parser");

//middelwares
app.use(
  cors({
    origin: `${originLINK}`,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//Routes
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
const addressRoutes = require("./routes/address.routes.js");
const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/addresses", addressRoutes);

//error handling middleware
app.use(notFound);
app.use(errorHandler);

// Starting the server after connecting to the database
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();