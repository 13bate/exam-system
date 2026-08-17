import { Router } from "express";
import { DeleteController, LoginController, RegisterController, UpdatePassword } from "./auth.controller.ts";


export const authRouter = Router();

authRouter.post("/login", LoginController);
authRouter.post("/register", RegisterController);

authRouter.delete("/delete-profile/:id", DeleteController)
authRouter.put("/reset-password/:id", UpdatePassword)
