import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan'
import config, { swagger } from 'config'
import api from 'modules'

const app = express()
const logger = (() => {
  if (config.ENV === 'development') return morgan('dev')
  if (config.ENV === 'production') return morgan('combined')
  return []
})()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json({ limit: '1mb' }))
  .use(logger)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
  .use('/api', api)

app.listen(config.PORT, () => {
  console.log(
    `Server (${config.ENV}) started at http://localhost:${config.PORT}`
  )
})
