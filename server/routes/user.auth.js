import express from "express";
import { signupAction } from "../controllers/auth.controller.js";

const authRouter = new express.Router();

authRouter.post("/signup", signupAction);

export default authRouter;
