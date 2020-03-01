import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerOptions } from 'swagger-ui-express'

const config: SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: process.env.npm_package_name,
      version: process.env.npm_package_version,
      description: process.env.npm_package_description,
    },
  },
  apis: ['./src/modules/**/index.ts'],
  basePath: '/',
  jsonEditor: true,
}

export default swaggerJSDoc(config)
