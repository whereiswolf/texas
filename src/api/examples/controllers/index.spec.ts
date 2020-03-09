import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import { mocked } from 'ts-jest/utils'
import { find, create, findById, update, remove } from '../repository'
import {
  getExamples,
  createExample,
  getExample,
  updateExample,
  deleteExample,
} from '.'

jest.mock('../repository', () => ({
  find: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
}))

describe('examples module controllers', () => {
  let response: any
  let next: jest.Mock

  beforeEach(() => {
    response = new Response()
    next = jest.fn()
    mocked(find).mockClear()
    mocked(findById).mockClear()
    mocked(create).mockClear()
    mocked(update).mockClear()
    mocked(remove).mockClear()
  })

  describe('getExamples function', () => {
    it('return a list of Examples in the repository', async () => {
      const request = {} as Request

      mocked(find).mockReturnValue([{ id: 'id-123', text: 'test' }])
      await getExamples(request, response, next)

      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith([{ id: 'id-123', text: 'test :)' }])
    })

    it('handles an exception', async () => {
      const request = {} as Request

      mocked(find).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await getExamples(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('getExample function', () => {
    it('return Example object from the repository', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(findById).mockReturnValue({ id: 'id-123', text: 'test' })
      await getExample(request, response, next)

      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith({ id: 'id-123', text: 'test :)' })
    })

    it('handles an exception', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(findById).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await getExample(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('createExample function', () => {
    it('creates and returns a newly created Example', async () => {
      const request = { body: { text: 'test' } } as Request

      mocked(create).mockReturnValue({ id: 'id-123', text: 'test' })
      await createExample(request, response, next)

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
      await createExample(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('updateExample function', () => {
    it('updates an existing Example object', async () => {
      const request = {
        params: { id: 'id-123' },
        body: { text: 'test 1' },
      } as Request<{ id: string }>

      mocked(update).mockReturnValue({ id: 'id-123', text: 'test 1' })
      await updateExample(request, response, next)

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
      await updateExample(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })

  describe('deleteExample function', () => {
    it('deletes a specified Example object', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(remove).mockReturnValue('id-123')
      await deleteExample(request, response, next)

      expect(remove).toBeCalledWith('id-123')
      expect(response.status).toBeCalledWith(204)
      expect(response.json).toBeCalledTimes(1)
    })

    it('handles an exception', async () => {
      const request = { params: { id: 'id-123' } } as Request<{ id: string }>

      mocked(remove).mockImplementationOnce(() => {
        throw new Error('test')
      })
      await deleteExample(request, response, next)

      expect(next).toBeCalledWith(new Error('test'))
    })
  })
})
