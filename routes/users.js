import express from "express";

import { addUser, getUsers } from "../controller/user.js";

export const userRouter = express.Router();
userRouter.post("/addUser", addUser);
userRouter.get("/listUser", getUsers);
 