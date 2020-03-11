---
to: src/api/<%= name %>/controllers/index.spec.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import { mocked } from 'ts-jest/utils'
import { find, create, findById, update, remove } from '../repository'
import {
  get<%= pluralPascalName %>,
  create<%= singularPascalName %>,
  get<%= singularPascalName %>,
  update<%= singularPascalName %>,
  delete<%= singularPascalName %>,
} from '.'

jest.mock('../repository', () => ({
  find: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
}))

describe('<%= pluralCamelName %> module controllers', () => {
  let response: any
  let next: jest.Mock

  beforeEach(() => {
    response = new Response()
    next = jest.fn()
    mocked(next).mockClear()
    mocked(find).mockClear()
    mocked(findById).mockClear()
    mocked(create).mockClear()
    mocked(update).mockClear()
    mocked(remove).mockClear()
  })

  describe('get<%= pluralPascalName %> function', () => {
    it('return a list of <%= pluralPascalName %> in the repository', async () => {
      const request = {} as Request

      mocked(find).mockReturnValue([{ id: 'id-123', text: 'test' }])
      await get<%= pluralPascalName %>(request, response, next)

      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith([{ id: 'id-123', text: 'test :)' }])
    })

    it('handles an exception', async () => {
      const request = {} as Request

      mocked(find).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await get<%= pluralPascalName %>(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('get<%= singularPascalName %> function', () => {
    it('return <%= singularPascalName %> object from the repository', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(findById).mockReturnValue({ id: 'id-123', text: 'test' })
      await get<%= singularPascalName %>(request, response, next)

      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith({ id: 'id-123', text: 'test :)' })
    })

    it('handles an exception', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(findById).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await get<%= singularPascalName %>(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('create<%= singularPascalName %> function', () => {
    it('creates and returns a newly created <%= singularPascalName %>', async () => {
      const request = { body: { text: 'test' } } as Request

      mocked(create).mockReturnValue({ id: 'id-123', text: 'test' })
      await create<%= singularPascalName %>(request, response, next)

      expect(create).toBeCalledWith({ text: 'test' })
      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith({ id: 'id-123', text: 'test' })
    })

    it('handles an exception', async () => {
      const request = {
        params: { id: 'id-123' },
        body: { text: 'test 1' },
      } as Request<{ id: string }>

      mocked(create).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await create<%= singularPascalName %>(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('update<%= singularPascalName %> function', () => {
    it('updates an existing <%= singularPascalName %> object', async () => {
      const request = {
        params: { id: 'id-123' },
        body: { text: 'test 1' },
      } as Request<{ id: string }>

      mocked(update).mockReturnValue({ id: 'id-123', text: 'test 1' })
      await update<%= singularPascalName %>(request, response, next)

      expect(update).toBeCalledWith('id-123', { text: 'test 1' })
      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith({ id: 'id-123', text: 'test 1' })
    })

    it('handles an exception', async () => {
      const request = {
        params: { id: 'id-123' },
        body: { text: 'test 1' },
      } as Request<{ id: string }>

      mocked(update).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await update<%= singularPascalName %>(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('delete<%= singularPascalName %> function', () => {
    it('deletes a specified <%= singularPascalName %> object', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(remove).mockReturnValue('id-123')
      await delete<%= singularPascalName %>(request, response, next)

      expect(remove).toBeCalledWith('id-123')
      expect(response.status).toBeCalledWith(204)
      expect(response.json).toBeCalledTimes(1)
    })

    it('handles an exception', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(remove).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await delete<%= singularPascalName %>(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })
})
