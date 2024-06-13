"use strict";
// import { Request, Response } from 'express';
// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import taskRoutes from '../src/taskRoutes';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map