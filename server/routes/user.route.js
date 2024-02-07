import express from "express";
import { testAction } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/test", testAction);

export default userRouter;
