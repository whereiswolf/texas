import fs from 'fs'
import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerOptions } from 'swagger-ui-express'

const BASE_PATH = '/api/v1'
const swaggerFilePath = path.join(process.env.PWD || '', 'swagger.json')
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
    servers: [
      { url: `http://${process.env.HOST}:${process.env.PORT}${BASE_PATH}` },
    ],
  },
  jsonEditor: true,
}

const swaggerFile = swaggerJSDoc(config)

fs.writeFile(swaggerFilePath, JSON.stringify(swaggerFile), (error) => {
  if (error) console.error(error)
})

export default swaggerFile
