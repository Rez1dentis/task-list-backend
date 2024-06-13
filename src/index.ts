// import { Request, Response } from 'express';
// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import taskRoutes from '../src/taskRoutes';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8080;

// // Мидлвары
// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Основной маршрут
// app.get('/', (_req: Request, res: Response) => {
//   return res.send('Express Typescript on Vercel');
// });

// // Маршруты
// app.use('/api/taskListApp', taskRoutes);

// // Обработка ошибок
// app.use((err: Error, req: Request, res: Response, next: Function) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel');
});

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓');
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
