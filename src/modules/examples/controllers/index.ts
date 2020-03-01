import { Request, Response, NextFunction } from 'express'
import { find, create } from '../repository'

export const getExamples = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ratings = await find()
    return res.status(200).json(ratings)
  } catch (err) {
    return next(err)
  }
}

export const createExample = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ratings = await create(req.body)
    return res.status(200).json(ratings)
  } catch (err) {
    return next(err)
  }
}
