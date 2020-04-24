import 'reflect-metadata'
import { Express } from 'express'
import loadMiddleware from './middleware'
import loadLogger from './logger'
import loadDatabase from './database'
import loadContainers from './containers'
import loadControllers from './controllers'
import loadDocs from './docs'

export const init = (app: Express) =>
  Promise.all([
    loadContainers(),
    loadMiddleware(app),
    loadLogger(app),
    loadDocs(app),
    loadControllers(app),
    loadDatabase(),
  ])

export default { init }
