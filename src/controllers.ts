import { Request, Response } from 'express';
import { CTask } from './models';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await CTask.findAll();

  res.json(tasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
};

export const createTask = async (req: Request, res: Response) => {
  const { id, name, date } = req.body;

  const task = await CTask.create({ id, name, date, isCompleted: false });

  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, isCompleted, date } = req.body;

  try {
    const task = await CTask.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.name = name !== undefined ? name : task.name;
    task.isCompleted = isCompleted !== undefined ? isCompleted : task.isCompleted;
    task.date = date !== undefined ? date : task.date;

    await task.save();

    res.json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await CTask.findByPk(id);

  if (task) {
    await task.destroy();
    res.json({ message: 'Задача удалена' });
  } else {
    res.status(404).send('Задача не найдена');
  }
};
