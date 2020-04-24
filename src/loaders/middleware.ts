import { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import status from 'express-status-monitor'
import helmet from 'helmet'

export default (app: Express) =>
  app
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json({ limit: '1mb' }))
    .use(helmet())
    .use(status())
