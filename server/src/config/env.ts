import "dotenv/config"


interface Env {
  DATABASE_URL: string,
  PORT: string;
}

export const env: Env = {
  DATABASE_URL: `${process.env.DATABASE_URL}`,
  PORT: String(process.env.PORT)
}
