import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export type ValidationTarget = 'body' | 'params'

export const schemaValidator = (
  schema: Joi.Schema,
  validationTarget: ValidationTarget = 'body'
) => (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  const { error } = Joi.validate(req[validationTarget], schema)
  if (!error) return next()

  const message = error.details.map(details => details.message).join(', ')
  return res.status(400).json({ error: message })
}

export default schemaValidator
