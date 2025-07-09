import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js';
import liveClassRouter from './routes/liveClassRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const allowedOrigins = ['http://localhost:3000', 'https://life-support-frontend.vercel.app'];

app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    }),
  )

app.use('/api/auth',authRouter);
app.use("/api/live-classes", liveClassRouter)

app.use((req,res,next)=>{
    res.status(404).json({success: false, message: 'Route not found'});
});

app.use(errorHandler);

export default app;