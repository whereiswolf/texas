---
to: src/api/<%= name %>/controllers/index.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { Request, Response, NextFunction } from 'express'
import { find, create, findById, update, remove } from '../repository'
import { addSmile, mapSmiles } from '../services'
import { <%= singularPascalName %> } from 'models'

export const get<%= pluralPascalName %> = async (
  _: Request,
  response: Response<<%= singularPascalName %>[]>,
  next: NextFunction
) => {
  try {
    const <%= pluralCamelName %> = await find()
    const <%= pluralCamelName %>WithSmiles = mapSmiles(<%= pluralCamelName %>)
    return response.status(200).json(<%= pluralCamelName %>WithSmiles)
  } catch (error) {
    return next(error)
  }
}

export const get<%= singularPascalName %> = async (
  request: Request<{ id: string }>,
  response: Response<<%= singularPascalName %>>,
  next: NextFunction
) => {
  try {
    const { id } = request.params
    const <%= singularCamelName %> = await findById(id)
    const <%= singularCamelName %>WithSmile = addSmile(<%= singularCamelName %>)
    return response.status(200).json(<%= singularCamelName %>WithSmile)
  } catch (error) {
    return next(error)
  }
}

export const create<%= singularPascalName %> = async (
  request: Request,
  response: Response<<%= singularPascalName %>>,
  next: NextFunction
) => {
  try {
    const { body } = request
    const <%= singularCamelName %> = await create(body)
    return response.status(200).json(<%= singularCamelName %>)
  } catch (error) {
    return next(error)
  }
}

export const update<%= singularPascalName %> = async (
  request: Request<{ id: string }>,
  response: Response<<%= singularPascalName %>>,
  next: NextFunction
) => {
  try {
    const {
      params: { id },
      body,
    } = request
    const <%= singularCamelName %> = await update(id, body)
    return response.status(200).json(<%= singularCamelName %>)
  } catch (error) {
    return next(error)
  }
}

export const delete<%= singularPascalName %> = async (
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
