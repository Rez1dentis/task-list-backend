"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const database_1 = require("../database/database");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield database_1.CTask.findAll();
    res.json(tasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, date } = req.body;
    const task = yield database_1.CTask.create({ id, name, date, isCompleted: false });
    res.json(task);
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, isCompleted, date } = req.body;
    try {
        const task = yield database_1.CTask.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.name = name !== undefined ? name : task.name;
        task.isCompleted = isCompleted !== undefined ? isCompleted : task.isCompleted;
        task.date = date !== undefined ? date : task.date;
        yield task.save();
        res.json(task);
    }
    catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield database_1.CTask.findByPk(id);
    if (task) {
        yield task.destroy();
        res.json({ message: 'Задача удалена' });
    }
    else {
        res.status(404).send('Задача не найдена');
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=controllers.js.map