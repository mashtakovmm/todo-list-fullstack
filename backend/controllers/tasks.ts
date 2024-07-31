import { Request, Response } from 'express';
import Task from '../models/Task'

const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(201).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
}

const postTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
}

const delTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            res.status(500).send("No task found")
        }
        res.status(201).send("Task deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}

const changeTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body,
            {
                new: true,
                runValidators: true
            });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
}

export { getAllTasks, postTask, delTask, changeTask };