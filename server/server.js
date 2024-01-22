import dotenv from 'dotenv';
import express from "express";
import root from './routes/root.js';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import corsOptions from './config/corsOptions.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3500;
app.use(express.json());
dotenv.config();
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/user', userRoutes)

const start = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(PORT, console.log(`Server is Listing to port : ${PORT} & DB Connected!`));
    } catch (error) {
        console.log(error);
    }
}

start()