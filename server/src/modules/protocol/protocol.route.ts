

import { Router } from "express";
import {
  getAllProtocolsController,
  getProtocolByIdController,
  createProtocolController,
  deleteProtocolController,
} from "./protocol.controller.ts";

const protocolRouter = Router();

protocolRouter.get("/", getAllProtocolsController);
protocolRouter.get("/:id", getProtocolByIdController);

protocolRouter.post("/", createProtocolController);

protocolRouter.delete("/:id", deleteProtocolController);

export default protocolRouter;
