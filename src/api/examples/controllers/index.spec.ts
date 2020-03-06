import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import { mocked } from 'ts-jest/utils'
import { find, create } from '../repository'
import { getExamples, createExample } from '.'

jest.mock('../repository', () => ({
  find: jest.fn(),
  create: jest.fn(),
}))

describe('examples module controllers', () => {
  let request: Request
  let response: any
  let next: jest.Mock

  beforeEach(() => {
    request = {} as Request
    response = new Response()
    next = jest.fn()
  })

  describe('getExamples function', () => {
    it('return a list of examples in the repository', async () => {
      mocked(find).mockReturnValue([{ id: 1, text: 'test' }])
      await getExamples(request, response, next)

      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith([{ id: 1, text: 'test :)' }])
    })
  })

  describe('createExample function', () => {
    it('creates and returns a newly created example', async () => {
      request = {
        body: { id: 1, text: 'test' },
      } as Request

      await createExample(request, response, next)

      expect(create).toBeCalledWith({ id: 1, text: 'test' })
      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith({ id: 1, text: 'test :)' })
    })
  })
})
