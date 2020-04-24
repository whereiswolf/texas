import config from 'config'
import createServer from './server'

const startServer = async () => {
  const server = await createServer()
  server.listen(config.PORT, config.HOST, (error) =>
    error
      ? console.log(error)
      : console.log(
          `Server (${config.NODE_ENV}) started at http://${config.HOST}:${config.PORT}`
        )
  )
}

startServer()
