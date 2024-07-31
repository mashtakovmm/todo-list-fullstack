import { Request, Response } from 'express';
import Task from '../models/Task'
import asyncWrapper from '../middleware/async-wrap';

export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
    const tasks = await Task.find();
    res.status(201).json({
        success: true, data: {
            tasks, nbHits: tasks.length
        }
    })
})

export const postTask = asyncWrapper(async (req: Request, res: Response) => {
    const task = await Task.create(req.body);
    res.status(201).json({
        success: true, task: task
    });
})

export const delTask = asyncWrapper(async (req: Request, res: Response) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        res.status(404).json({ success: false, error: `No task with id ${req.params.id} found` })
    }
    res.status(201).json({ success: true });
})

export const changeTask = asyncWrapper(async (req: Request, res: Response) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body,
        {
            new: true,
            runValidators: true
        });
    res.status(201).json({ success: true, task: task });
})

