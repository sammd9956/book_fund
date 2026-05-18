import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import {connectDB} from '../config/db.js';
connectDB();
import userRoute from './routes/userRoute.js';
import fundRoute from './routes/fundRoute.js';
import { errorMiddleware } from '../middleware/error.js';
import cors from 'cors';
import { corsOptions } from '../constants/config.js';

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use("/api/v1/user", userRoute)
app.use("/api/v1/fund", fundRoute)


app.use(errorMiddleware);

export default app;