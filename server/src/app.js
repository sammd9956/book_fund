const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const {connectDB} = require('../config/db');
connectDB();
const userRoute = require('./routes/userRoute');
const { errorMiddleware } = require('../middleware/error');



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use("/api/v1/user", userRoute)


app.use(errorMiddleware);

module.exports = app;