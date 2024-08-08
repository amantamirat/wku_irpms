import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Welcome Back!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
