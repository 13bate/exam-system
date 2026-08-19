import { Router } from "express";
import { createClientTestController, getAllClientTestsController, getClientTestById } from "./client-test.controller.ts";


export const clientTestRouter = Router();



clientTestRouter.get("/", getAllClientTestsController);
clientTestRouter.get("/:id", getClientTestById);
clientTestRouter.post("/", createClientTestController);
