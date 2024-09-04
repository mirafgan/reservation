import { Request, Response, Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req: Request, res: Response) => {
    res.status(200).json("Hello")
})

export default userRoutes