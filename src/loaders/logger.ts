import { Express } from 'express'
import config from 'config'
import morgan from 'morgan'

export default (app: Express) => {
  if (config.NODE_ENV === 'development') return app.use(morgan('dev'))
  if (config.NODE_ENV === 'production') return app.use(morgan('combined'))
  return app
}
