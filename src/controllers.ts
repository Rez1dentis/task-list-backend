import { Request, Response } from 'express';
import { Task } from './models';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { id, name, date } = req.body;
  const task = await Task.create({ id, name, date, isCompleted: false });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, isCompleted, date } = req.body;
  const task = await Task.findByPk(id);
  if (task) {
    task.name = name;
    task.isCompleted = isCompleted;
    task.date = date;
    await task.save();
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (task) {
    await task.destroy();
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).send('Task not found');
  }
};
