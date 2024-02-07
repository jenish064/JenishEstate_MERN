import express from "express";
import { authAction } from "../controllers/auth.controller.js";

const authRouter = new express.Router();

authRouter.post("/signup", authAction);

export default authRouter;
