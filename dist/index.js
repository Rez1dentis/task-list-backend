"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const taskRoutes_1 = __importDefault(require("../src/taskRoutes"));
const database_1 = require("../src/config/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Мидлвары
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Проверка подключения к базе данных
database_1.sequelize
    .authenticate()
    .then(() => {
    console.log('Connection to the database has been established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
// Логирование запросов
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// Маршруты
app.use('/api/taskListApp', taskRoutes_1.default);
// Обработка ошибок
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Something broke!');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map