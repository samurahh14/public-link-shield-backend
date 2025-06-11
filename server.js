const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const linkRoutes = require('./routes/scan');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min
  max: 15,
});
app.use(limiter);

// Routes
app.use('/api/scan', linkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
