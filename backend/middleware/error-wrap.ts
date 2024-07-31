import { Request, Response } from "express"

const errorWrapper = (err: Error, req: Request, res: Response, next: Function) => {
    return res.status(502).json({success: false, error: err})
}

export default errorWrapper