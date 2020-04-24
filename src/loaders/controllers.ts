import { Express } from 'express'
import { useExpressServer } from 'routing-controllers'
import config from 'config'
import api from 'api'

export default (app: Express) =>
  useExpressServer(app, {
    routePrefix: config.BASE_PATH,
    controllers: api,
  })
