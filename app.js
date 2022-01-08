const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/userRoutes');
const luggageRouter = require('./Routes/luggageRouter');

const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
  AccessControlAllow: true
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '500kb' }));
app.use('/api/v1/user', userRouter);
app.use('/api/v1/luggage', luggageRouter);

module.exports = app;
