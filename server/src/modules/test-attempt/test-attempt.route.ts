import { Router } from "express";
import { createTestAttemptController, getAllTestAttemptController, getTestAttemptByIDController } from "./test-attempt.controller.ts";





export const testAttemptRouter = Router();


testAttemptRouter.get("/", getAllTestAttemptController);
testAttemptRouter.get("/:id", getTestAttemptByIDController);
testAttemptRouter.post("/", createTestAttemptController)
