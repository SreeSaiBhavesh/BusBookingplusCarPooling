import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import busesRoutes from './routes/buses.js'
import usersRoutes from './routes/users.js'
import seatsRoutes from './routes/seats.js'
import carsRoutes from './routes/cars.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// create port for backend
const app = express();

dotenv.config();

const connect = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");
    }catch(error){
        throw error;
    }
}

app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/buses', busesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/seats', seatsRoutes)
app.use('/cars/api/cars', carsRoutes)



app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Error!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(5000, ()=>{
    connect();
    console.log("Connected");
});