import express from 'express'
import loaders from './loaders'

export const createServer = async () => {
  const app = express()
  await loaders.init(app)
  return app
}

export default createServer
