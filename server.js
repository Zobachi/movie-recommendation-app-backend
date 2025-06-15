import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
import movieRoutes from './routes/movieRoutes.js';
app.use('/api/movies', movieRoutes);
import userRoutes from './routes/userRoutes.js';
app.use('/api/user', userRoutes);



app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
//app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
