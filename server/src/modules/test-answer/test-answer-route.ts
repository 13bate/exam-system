import { Router } from "express";
import { createTestAnswerController, getTestAnswerByIdController, getTestAnswerController } from "./test-answer.controller.ts";




export const testAnswerRouter = Router()



testAnswerRouter.get("/", getTestAnswerController);
testAnswerRouter.get("/:id", getTestAnswerByIdController);

testAnswerRouter.post("/:testAttemptId", createTestAnswerController)
