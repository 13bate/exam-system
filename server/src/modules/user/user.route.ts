import express from "express"
import { createUserController, deleteUserController, getAllUsersController, getUserByIdController, updateUserController } from "./user.controller.ts";


export const userRouter = express.Router();


userRouter.get("/", getAllUsersController);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/", createUserController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);
