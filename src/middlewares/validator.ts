import { Request, Response, NextFunction } from 'express'
import { validate, object, string, Schema } from 'joi'

type ValidationLocation = 'body' | 'params'

const IdSchema = object({
  id: string().required(),
})

export const createValidator = (location: ValidationLocation) => (
  schema: Schema
) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = validate(req[location], schema, { abortEarly: false })
  if (!error) return next()

  const message = error.details.map(details => details.message)
  return res.status(400).json({ error: message })
}

export default {
  id: createValidator('params')(IdSchema),
  body: createValidator('body'),
  params: createValidator('params'),
}
