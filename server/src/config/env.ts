import "dotenv/config"


interface Env {
  DATABASE_URL: string,
  PORT: string;
  NODE_ENV: string;
  JWT_SECRET: string;
}

export const env: Env = {
  DATABASE_URL: `${process.env.DATABASE_URL}`,
  PORT: String(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  JWT_SECRET: String(process.env.JWT_SECRET)
}
