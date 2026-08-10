import { prisma } from "../../config/prisma.ts"
import type { Request, Response } from "express"

export const userController = {

  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    }
    catch {
      res.status(500).json({ error: "Failed to get user" })
    }
  },

  getUserById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: String(id),
        }
      })
      if (!user) {
        return res.status(404).json({ message: "User not found" })
      }
    }
    catch (error) {
      return res.status(500).json({ error: "Internal server error", })
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.create({
        data: req.body
      })
      return res.status(201).json(user);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error", })
    }
  },

  updateUserInfo: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.update({
        where: { id: String(id) },
        data: req.body,
      })

      return res.status(201).json({ user })
    }
    catch (error) {
      return res.status(500).json({ error: "Internal server error" })
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedUser = await prisma.user.delete({
        where: { id: String(id) }
      });
      return res.status(201).send({
        message: "User has beed deleted",
        user: deletedUser
      })
    }
    catch (error) {
      return res.status(500).json({ error: "Internal server error" })
    }
  }

}
