import { Request, Response } from 'express';

const getAllTasks = (req: Request, res: Response) => {
    res.send("all items")
}

module.exports = {
    getAllTasks,
}