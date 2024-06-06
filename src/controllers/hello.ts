import { Request, Response } from "express";

export const Hello = (req: Request, res: Response) => {
    res.status(200).json({message: "Hello Vital Link"})
}