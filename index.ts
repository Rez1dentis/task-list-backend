import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './src/routes/taskRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Мидлвары
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Логирование запросов
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Маршруты
app.use('/api/taskListApp', taskRoutes);

// Обработка ошибок
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});

export default app;
