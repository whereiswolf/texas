import dotenv from 'dotenv'

dotenv.config()

type Env = 'development' | 'production' | 'testing'

export default {
  ENV: (process.env.ENV || 'development') as Env,
  PORT: (process.env.PORT || 3000) as number,
  DATABASE_URL: process.env.DATABASE_URL,
}

export { default as swagger } from './swagger'
