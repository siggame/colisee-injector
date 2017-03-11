import {Request, Response, NextFunction} from "express";

import { HttpError } from "./errors";

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.path}`);
    next();
}

export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
    res.status(err.code).send(err.body());
}