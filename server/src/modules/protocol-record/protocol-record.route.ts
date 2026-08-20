import { Router } from "express";
import {
  getAllProtocolRecordsController,
  getProtocolRecordByIdController,
  createProtocolRecordController,
  deleteProtocolRecordController,
} from "./protocol-record.controller.ts";

const protocolRecordRouter = Router();

protocolRecordRouter.get("/", getAllProtocolRecordsController);
protocolRecordRouter.get("/:id", getProtocolRecordByIdController);

protocolRecordRouter.post("/", createProtocolRecordController);

protocolRecordRouter.delete("/:id", deleteProtocolRecordController);

export default protocolRecordRouter;
