import "dotenv/config"


interface Env {
  DATABASE_URL: string,
}

export const env: Env = {
  DATABASE_URL: `${process.env.DATABASE_URL}`,
}
