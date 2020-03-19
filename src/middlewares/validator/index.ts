import { Request, Response, NextFunction } from 'express'
import { object, string, Schema } from '@hapi/joi'

type ValidationLocation = 'body' | 'params'

const IdSchema = object<{ id: string }>({
  id: string().required(),
})

export const createValidator = (location: ValidationLocation) => (
  schema: Schema
) => (request: Request, response: Response, next: NextFunction) => {
  try {
    const { error } = schema.validate(request[location], { abortEarly: false })
    if (!error) return next()

    const message = error.details.map(details => details.message)
    return response.status(400).json({ error: message })
  } catch (error) {
    next(error)
  }
}

export default {
  id: createValidator('params')(IdSchema),
  body: createValidator('body'),
  params: createValidator('params'),
}
