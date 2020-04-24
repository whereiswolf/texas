import dotenv from 'dotenv'

dotenv.config()

type Env = 'development' | 'production' | 'testing'

export default {
  NODE_ENV: (process.env.NODE_ENV || 'development') as Env,
  PORT: (process.env.PORT || 8000) as number,
  HOST: process.env.HOST || '0.0.0.0',
  DATABASE_URL: process.env.DATABASE_URL,
  TITLE: process.env.npm_package_name || '',
  VERSION: process.env.npm_package_version || '',
  DESCRIPTION: process.env.npm_package_description || '',
  BASE_PATH: '/api',
}
