import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from './controllers';

const router = Router();

router.get('/tasks/getTasks', getTasks);
// router.put('/tasks/reorder', reorderTasks);
router.post('/tasks/create', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
