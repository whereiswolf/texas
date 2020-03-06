import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerOptions } from 'swagger-ui-express'

const config: SwaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: process.env.npm_package_name,
      version: process.env.npm_package_version,
      description: process.env.npm_package_description,
    },
  },
  apis: ['./src/**/*.ts'],
  basePath: '/',
  jsonEditor: true,
}

export default swaggerJSDoc(config)
