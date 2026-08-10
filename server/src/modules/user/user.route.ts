import express from "express"
import { userController } from "./user.controller.ts"


export const userRouter = express.Router();


userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.updateUserInfo);
userRouter.delete("/:id", userController.deleteUser);
