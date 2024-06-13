import { Request, Response } from 'express';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from '../src/taskRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Мидлвары
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Основной маршрут
app.get('/api', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Welcome to TaskList App!' });
});

// Маршруты
app.use('/api/taskListApp', taskRoutes);

// Обработка ошибок
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
