import { Request, Response } from 'express';
import pool from '../database/database';

// Получить все задачи
export const getTasks = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY date DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Создать новую задачу
export const createTask = async (req: Request, res: Response) => {
  const { name, date } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO tasks (name, isCompleted, date) VALUES ($1, $2, $3) RETURNING *',
      [name, false, date],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Обновить задачу
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, isCompleted, date } = req.body;

  try {
    const result = await pool.query(
      'UPDATE tasks SET name = $1, isCompleted = $2, date = $3 WHERE id = $4 RETURNING *',
      [name, isCompleted, date, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Удалить задачу
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
