import { Router } from "express";
import userRoutes from "./user";

const routes = Router();


routes.use("/user", userRoutes)


export default routes