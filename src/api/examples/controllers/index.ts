import { Request, Response, NextFunction } from 'express'
import { find, create, findById, update, remove } from '../repository'
import { addSmile, mapSmiles } from '../services'
import { Example } from 'models'

export const getExamples = async (
  _: Request,
  response: Response<Example[]>,
  next: NextFunction
) => {
  try {
    const examples = await find()
    const examplesWithSmiles = mapSmiles(examples)
    return response.status(200).json(examplesWithSmiles)
  } catch (error) {
    return next(error)
  }
}

export const getExample = async (
  request: Request<{ id: string }>,
  response: Response<Example>,
  next: NextFunction
) => {
  try {
    const { id } = request.params
    const example = await findById(id)
    const exampleWithSmile = addSmile(example)
    return response.status(200).json(exampleWithSmile)
  } catch (error) {
    return next(error)
  }
}

export const createExample = async (
  request: Request,
  response: Response<Example>,
  next: NextFunction
) => {
  try {
    const { body } = request
    const example = await create(body)
    return response.status(200).json(example)
  } catch (error) {
    return next(error)
  }
}

export const updateExample = async (
  request: Request<{ id: string }>,
  response: Response<Example>,
  next: NextFunction
) => {
  try {
    const {
      params: { id },
      body,
    } = request
    const example = await update(id, body)
    return response.status(200).json(example)
  } catch (error) {
    return next(error)
  }
}

export const deleteExample = async (
  request: Request<{ id: string }>,
  response: Response,
  next: NextFunction
) => {
  try {
    const { id } = request.params
    await remove(id)
    return response.status(204).json()
  } catch (error) {
    return next(error)
  }
}
