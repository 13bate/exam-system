import { prisma } from "../../config/prisma.ts"
import * as z from "zod";
import { AppError } from "../../utils/AppError.ts";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { env } from "../../config/env.ts";


const passwordSchema = z.string().min(3, "Password must be at least 3 characters long")

const updatePasswordSchema = z.object({
  password: passwordSchema,
  currentPassword: z.string(),
  confirmPassword: z.string().min(3, "Password must be at least 3 characters long"),
}).refine((data) => data.password === data.confirmPassword)

const createAdminSchema = z.object({
  email: z.email("Invalid email address"),
  password: passwordSchema,
})

type IData = z.infer<typeof createAdminSchema>


const saltRounds = 12;


export const login = async (data: IData) => {

  const validatedData = createAdminSchema.safeParse(data);

  if (!validatedData.success) {
    throw new AppError(validatedData.error.issues.map(issue => issue.message).join(", "), 400)
  }

  const email = validatedData.data.email;
  const password = validatedData.data.password;

  const admin = await prisma.admin.findUnique({
    where: { email: email }
  })

  if (!admin) {
    throw new AppError("Invalid login or password", 401)
  }


  const passwordCheck = await bcrypt.compare(password, admin.password)

  if (!passwordCheck) {
    throw new AppError("Password is incorrect", 401)
  }


  const token = jwt.sign(
    { id: admin.id },
    env.JWT_SECRET,
    { expiresIn: "24h" }
  )

  return { admin, token }

}



export const register = async (data: IData) => {
  const { email, password } = data;
  const validatedData = createAdminSchema.safeParse({ email, password });




  if (!validatedData.success) {
    throw new AppError(validatedData.error.issues.map(issue => issue.message).join(", "), 400)
  }


  const passwordHash = await bcrypt.hash(password, saltRounds)


  const admin = await prisma.admin.create({
    data: {
      email: email,
      password: passwordHash
    }
  })

  const token = jwt.sign(
    { id: admin.id },
    env.JWT_SECRET,
    { expiresIn: "24h" }
  )


  return { admin, token }

}


export const deleteAdmin = async (id: string) => {

  const admin = await prisma.admin.delete({
    where: { id }
  })

  return { admin }
}


export const updatePassword = async (id: string, password: string, confirmPassword: string) => {
  const admin = await prisma.admin.findUnique({
    where: { id }
  });

  if (!admin) {
    throw new AppError("User Not Found", 404)
  }

  const currentPassword = admin.password

  const validatedPassword = updatePasswordSchema.safeParse({ password, currentPassword, confirmPassword });

  if (!validatedPassword.success) {
    throw new AppError(validatedPassword.error.issues.map(issue => issue.message).join(", "), 400)
  }

  const passwordHash = await bcrypt.hash(password, saltRounds)

  await prisma.admin.update({
    where: { id },
    data: { password: passwordHash }
  });

  return admin
}
