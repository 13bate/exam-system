import type { Request, Response } from "express"
import { register, login, deleteAdmin, updatePassword } from "./auth.service.ts";

export const LoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await login({ email, password })

  res.status(200).json(result)
}


export const RegisterController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await register({ email, password })

  res.status(201).json(result)
}


export const DeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const admin = await deleteAdmin(String(id));

  res.status(204).json(admin)
}


export const UpdatePassword = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password, confirmPassword } = req.body;

  const admin = await updatePassword(String(id), password, confirmPassword)

  res.status(200).json(admin)
}



