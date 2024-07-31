import { Router } from "express";
import {
    getAllTasks,
    postTask,
    delTask,
    changeTask
} from '../controllers/tasks'
const router = Router();

router.route('/').get(getAllTasks).post(postTask)
router.route('/:id').delete(delTask).patch(changeTask)

export default router;