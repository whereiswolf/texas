import { Request, Response, NextFunction } from 'express'
import { find, create } from '../repository'
import { addSmile, mapSmiles } from '../services'

export const getExamples = async (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const examples = await find()
    const examplesWithSmile = mapSmiles(examples)
    return response.status(200).json(examplesWithSmile)
  } catch (err) {
    return next(err)
  }
}

export const createExample = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { body } = request
    await create(body)
    const exampleWithSmile = addSmile(body)
    return response.status(200).json(exampleWithSmile)
  } catch (err) {
    return next(err)
  }
}
