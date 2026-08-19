import { Router } from "express";
import { createTestAnswerController, getTestAnswerByIdController, getTestAnswerController } from "./test-answer.controller.ts";




export const testAnswerRouter = Router()



testAnswerRouter.get("/test-answer", getTestAnswerController);
testAnswerRouter.get("/test-answer/:id", getTestAnswerByIdController);

testAnswerRouter.post("/test-answer", createTestAnswerController)
