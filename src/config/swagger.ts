import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerOptions } from 'swagger-ui-express'

const apis = [
  process.env.NODE_ENV === 'development' ? './src/**/*.ts' : './dist/**/*.js',
]

const config: SwaggerOptions = {
  apis,
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: process.env.npm_package_name,
      version: process.env.npm_package_version,
      description: process.env.npm_package_description,
    },
  },
  basePath: '/',
  jsonEditor: true,
}

export default swaggerJSDoc(config)
