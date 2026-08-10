
import { prisma } from "../config/prisma.ts"


const seed = async () => {

  await prisma.admin.create({
    data: {
      id: "spz-main",
      login: "admin",
      password: "ccc"
    }
  })


}


seed()
