import type { Response, Request, NextFunction } from "express"
import { AppError } from "../utils/AppError.ts";
import { prisma } from "../config/prisma.ts";
import { env } from "../config/env.ts";
import jwt from "jsonwebtoken";


interface JwtPayload {
  id: string
}

export const authMiddleware = ((req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    throw new AppError('Access Denied: No token provided.', 401)
  }

  jwt.verify(token, env.JWT_SECRET, async (err, decodedPayload) => {
    if (err) {
      console.log(err.message)
      throw new AppError("Access Denied: You do not have the required permissions or roles.", 403)
    };

    const payload = decodedPayload as JwtPayload;

    const admin = await prisma.admin.findFirst({
      where: { id: payload.id }
    })

    if (!admin) {
      throw new AppError("Administrator not found", 401)
    }

    next()

  })
})
