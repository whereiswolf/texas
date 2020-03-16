import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import validator from './validator'
import { object, string, bool, number } from '@hapi/joi'
import { mocked } from 'ts-jest/utils'

describe('schemaValidator middleware', () => {
  let response: any
  let next: jest.Mock

  beforeEach(() => {
    response = new Response()
    next = jest.fn()
    mocked(next).mockClear()
  })

  it('passes the request to the next handler if body schema is correct', async () => {
    const request = {
      body: {
        id: 'id-123',
        isActive: true,
        availableAccounts: 3,
      },
    } as Request

    const schema = object({
      id: string().required(),
      isActive: bool(),
      availableAccounts: number().less(10),
    })

    const validate = validator.body(schema)
    validate(request, response, next)

    expect(next).toBeCalled()
  })

  it('responds with errors if body is incorrect', async () => {
    const request = {
      body: {
        isActive: 'test',
        availableAccounts: 15,
      },
    } as Request

    const schema = object({
      id: string().required(),
      isActive: bool(),
      availableAccounts: number().less(10),
    })

    const validate = validator.body(schema)
    validate(request, response, next)

    expect(response.status).toBeCalledWith(400)
    expect(response.json).toBeCalledWith({
      error: [
        '"id" is required',
        '"isActive" must be a boolean',
        '"availableAccounts" must be less than 10',
      ],
    })
  })

  it('passes the request to the next handler if params schema is correct', async () => {
    const request = {
      params: {
        id: 'id-123',
        userId: 'user-123',
      },
    } as Request<{ id: string; userId: string }>

    const schema = object({
      id: string().required(),
      userId: string().required(),
    })

    const validate = validator.body(schema)
    validate(request, response, next)

    expect(next).toBeCalled()
  })

  it('responds with errors if params are incorrect', async () => {
    const request = {
      params: {
        id: 'id-123',
      },
    } as Request<{ id: string }>

    const schema = object({
      id: string().required(),
      userId: string().required(),
    })

    const validate = validator.params(schema)
    validate(request, response, next)

    expect(response.status).toBeCalledWith(400)
    expect(response.json).toBeCalledWith({
      error: ['"userId" is required'],
    })
  })

  it('passes the request to the next handler if request has id', async () => {
    const request = {
      params: { id: 'id-123' },
    } as Request<{ id: string }>

    validator.id(request, response, next)
    expect(next).toBeCalled()
  })

  it('responds with error if params are missing id', async () => {
    const request = {
      params: { id: undefined },
    } as Request<any>

    validator.id(request, response, next)
    expect(response.status).toBeCalledWith(400)
    expect(response.json).toBeCalledWith({
      error: ['"id" is required'],
    })
  })
})
