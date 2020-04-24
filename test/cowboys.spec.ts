import request, { SuperTest, Test } from 'supertest'
import { Container } from 'typedi'
import createServer from '../src/server'
import { CowboysRepository } from '../src/api/cowboys/repositories'

const BASE_PATH = '/api'

describe('Cowboys API module ', () => {
  let agent: SuperTest<Test>

  beforeAll(async () => {
    const app = await createServer()
    agent = request.agent(app)

    Container.set(
      CowboysRepository,
      new CowboysRepository([
        {
          id: 'veryrandomid1234',
          name: 'Test McTesterson',
          birthDate: '2020-02-01T09:00:00.000Z',
          deathDate: '2021-01-31T09:00:00.000Z',
        },
        {
          id: 'veryrandomid0987',
          name: 'Test the Kid',
          birthDate: '2019-03-02T09:00:00.000Z',
          deathDate: '2029-02-01T09:00:00.000Z',
        },
      ])
    )
  })

  describe('GET /cowboys', () => {
    it('responds with a list', async () => {
      await agent.get(`${BASE_PATH}/cowboys`).expect(200, [
        {
          id: 'veryrandomid1234',
          name: 'Test McTesterson',
          birthDate: '2020-02-01T09:00:00.000Z',
          deathDate: '2021-01-31T09:00:00.000Z',
        },
        {
          id: 'veryrandomid0987',
          name: 'Test the Kid',
          birthDate: '2019-03-02T09:00:00.000Z',
          deathDate: '2029-02-01T09:00:00.000Z',
        },
      ])
    })
  })

  describe('POST /cowboys', () => {
    it('creates a new object and sends it response', async () => {
      const { body: createdObject } = await agent
        .post(`${BASE_PATH}/cowboys`)
        .send({
          name: 'John Test',
          birthDate: '2020-02-01T09:00:00.000Z',
          deathDate: '2021-01-31T09:00:00.000Z',
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.id).toMatch(/^[a-z0-9]{16}$/)
          expect(body.name).toBe('John Test')
          expect(body.birthDate).toBe('2020-02-01T09:00:00.000Z')
          expect(body.deathDate).toBe('2021-01-31T09:00:00.000Z')
        })

      await agent
        .get(`${BASE_PATH}/cowboys`)
        .expect(({ body }) => expect(body).toContainEqual(createdObject))
    })
  })

  describe('GET /cowboys/:id', () => {
    it('responds with a correct object', async () => {
      await agent.get(`${BASE_PATH}/cowboys/veryrandomid1234`).expect(200, {
        id: 'veryrandomid1234',
        name: 'Test McTesterson',
        birthDate: '2020-02-01T09:00:00.000Z',
        deathDate: '2021-01-31T09:00:00.000Z',
      })
    })
  })

  describe('PUT /cowboys/:id', () => {
    it('responds with an updated object', async () => {
      await agent
        .put(`${BASE_PATH}/cowboys/veryrandomid1234`)
        .send({
          name: 'John Test',
          birthDate: '1990-06-05T23:00:00.000Z',
          deathDate: '2000-03-21T01:00:00.000Z',
        })
        .expect(200, {
          id: 'veryrandomid1234',
          name: 'John Test',
          birthDate: '1990-06-05T23:00:00.000Z',
          deathDate: '2000-03-21T01:00:00.000Z',
        })
    })
  })

  describe('PATCH /cowboys/:id', () => {
    it('responds with an updated object', async () => {
      await agent
        .patch(`${BASE_PATH}/cowboys/veryrandomid1234`)
        .send({
          name: 'Billy the Test',
        })
        .expect(200, {
          id: 'veryrandomid1234',
          name: 'Billy the Test',
          birthDate: '1990-06-05T23:00:00.000Z',
          deathDate: '2000-03-21T01:00:00.000Z',
        })
    })
  })

  describe('DELETE /cowboys/:id', () => {
    it('deletes an object', async () => {
      await agent.delete(`${BASE_PATH}/cowboys/veryrandomid0987`).expect(204)
      await agent.get(`${BASE_PATH}/cowboys`).expect(({ body }) => {
        expect(body.length).toBe(2)
        expect(body).not.toContainEqual({
          id: 'veryrandomid0987',
          name: 'Test the Kid',
          birthDate: '2019-03-02T09:00:00.000Z',
          deathDate: '2029-02-01T09:00:00.000Z',
        })
      })
    })
  })
})
