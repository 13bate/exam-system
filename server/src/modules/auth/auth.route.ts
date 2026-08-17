import { Router } from "express";
import { deleteController, loginController, registerController, updatePasswordController } from "./auth.controller.ts";


export const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);

authRouter.delete("/delete-profile/:id", deleteController)
authRouter.put("/reset-password/:id", updatePasswordController)
