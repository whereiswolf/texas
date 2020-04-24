import { Express } from 'express'
import config from 'config'
import swaggerUi from 'swagger-ui-express'
import { getMetadataArgsStorage } from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import { getFromContainer, MetadataStorage } from 'class-validator'
import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import api from 'api'

const { validationMetadatas } = getFromContainer(MetadataStorage) as any
const schemas = validationMetadatasToSchemas(validationMetadatas, {
  refPointerPrefix: '#/components/schemas/',
})

const storage = getMetadataArgsStorage()
const docs = routingControllersToSpec(
  storage,
  {
    routePrefix: config.BASE_PATH,
    controllers: api,
  },
  {
    components: {
      schemas,
    },
    info: {
      title: config.TITLE,
      version: config.VERSION,
      description: config.DESCRIPTION,
    },
  }
)

export default (app: Express) =>
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs))
