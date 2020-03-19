import { Express, Request, Response, NextFunction } from 'express'
import config, { swagger } from 'config'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import status from 'express-status-monitor'
import morgan from 'morgan'
import helmet from 'helmet'
import api from 'api'

const skip = (_: Request, __: Response, next: NextFunction) => next()
const logger = () => {
  if (config.NODE_ENV === 'development') return morgan('dev')
  if (config.NODE_ENV === 'production') return morgan('combined')
  return skip
}

const loadMiddleware = (app: Express) =>
  app
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json({ limit: '1mb' }))
    .use(helmet())
    .use(status())
    .use(logger())
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
    .use('/api/v1', api)

export default loadMiddleware
