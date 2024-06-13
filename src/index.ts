import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from '../src/taskRoutes';
import { sequelize } from '../src/config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Мидлвары
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Проверка подключения к базе данных
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel');
});

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
