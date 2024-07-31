import { Router } from "express";

const router = Router();

const { getAllTasks,
    postTask,
    delTask,
    changeTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(postTask)
router.route('/:id').delete(delTask).put(changeTask)

// get all tasks
// patch task status by id
// del task by id
// put task

module.exports = router