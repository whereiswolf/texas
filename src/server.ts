import express from 'express'
import config from 'config'
import loaders from './loaders'

export default (async () => {
  const app = express()

  await loaders.init(app)

  return app.listen(config.PORT, config.HOST, error =>
    error
      ? console.log(error)
      : console.log(
          `Server (${config.NODE_ENV}) started at http://${config.HOST}:${config.PORT}`
        )
  )
})()
