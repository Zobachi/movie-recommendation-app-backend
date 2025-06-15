import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
connectDB();

const app = express();

app.use('/api/movies', movieRoutes);

app.use('/api/user', userRoute);



app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
//app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
