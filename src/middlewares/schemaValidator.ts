import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export default (schema: Joi.Schema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = Joi.validate(req.body, schema)
  if (!error) return next()

  const message = error.details.map(details => details.message).join(', ')
  return res.status(400).json({ error: message })
}
