import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import status from 'express-status-monitor'
import morgan from 'morgan'
import helmet from 'helmet'
import config, { swagger } from 'config'
import api from 'api'

const app = express()
const logger = (() => {
  if (config.NODE_ENV === 'development') return morgan('dev')
  if (config.NODE_ENV === 'production') return morgan('combined')
  return []
})()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json({ limit: '1mb' }))
  .use(helmet())
  .use(status())
  .use(logger)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
  .use('/api', api)

app.listen(config.PORT, config.HOST, () => {
  console.log(
    `Server (${config.NODE_ENV}) started at http://${config.HOST}:${config.PORT}`
  )
})
