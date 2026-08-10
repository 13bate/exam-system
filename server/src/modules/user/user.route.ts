import express from "express"
import { userController } from "./user.controller.ts"


const router = express.Router();


router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user", userController.createUser);
router.patch("/user/:id", userController.updateUserInfo);
router.delete("/user/:id", userController.deleteUser);
