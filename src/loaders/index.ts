import { Express } from 'express'
import loadMiddleware from './middleware'
import loadDatabase from './database'

const init = (app: Express) =>
  Promise.all([loadMiddleware(app), loadDatabase()])

export default { init }
