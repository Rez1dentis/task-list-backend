import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controller/controllers';

const router = Router();

router.get('/tasks/getTasks', getTasks);
// router.put('/tasks/reorder', reorderTasks);
router.post('/tasks/create', createTask);
router.put('/tasks/update/:id', updateTask);
router.delete('/tasks/delete/:id', deleteTask);

export default router;
