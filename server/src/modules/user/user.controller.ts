import type { Request, Response } from "express";
import {
  findAll,
  findById,
  create,
  update,
  deleteUser,
} from "./user.service.ts";

export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await findAll();

  res.status(200).json(users)
}

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await findById(String(id));

  res.status(200).json(user);
};

export const createUserController = async (req: Request, res: Response) => {
  const user = await create(req.body);

  res.status(201).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await update(String(id), req.body);

  res.status(200).json({ user });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedUser = await deleteUser(String(id));

  res.status(204).json(deletedUser)
};
