const express = require('express');
const app = express();
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/error.middleware');
const DB = require('./config/db.config');
const PORT = process.env.PORT || 5000;

//middelwares
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

//Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

//error handling middleware
app.use(notFound);
app.use(errorHandler);

//Starting Point
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
