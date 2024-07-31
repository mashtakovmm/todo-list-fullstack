import { Request, Response } from 'express';
import Task from '../models/Task'

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(201).json({
            success: true, data: {
                tasks, nbHits: tasks.length
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
}

export const postTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            success: true, task: task
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
}

export const delTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            res.status(500).json({ success: false, error: `No task with id ${req.params.id} found` })
        }
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
}

export const changeTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body,
            {
                new: true,
                runValidators: true
            });
        res.status(201).json({ success: true, task: task });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
}

