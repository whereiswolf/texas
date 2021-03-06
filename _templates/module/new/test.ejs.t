---
to: test/<%= name %>.spec.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import request, { SuperTest, Test } from 'supertest'
import { Container } from 'typedi'
import createServer from '../src/server'
import { <%= pluralPascalName %>Repository } from '../src/api/<%= name %>/repositories'

const BASE_PATH = '/api'

describe('<%= pluralPascalName %> API module ', () => {
  let agent: SuperTest<Test>

  beforeAll(async () => {
    const app = await createServer()
    agent = request.agent(app)

    Container.set(
      <%= pluralPascalName %>Repository,
      new <%= pluralPascalName %>Repository([
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

  describe('GET /<%= pluralCamelName %>', () => {
    it('responds with a list', async () => {
      await agent.get(`${BASE_PATH}/<%= pluralCamelName %>`).expect(200, [
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

  describe('POST /<%= pluralCamelName %>', () => {
    it('creates a new object and sends it response', async () => {
      const { body: createdObject } = await agent
        .post(`${BASE_PATH}/<%= pluralCamelName %>`)
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
        .get(`${BASE_PATH}/<%= pluralCamelName %>`)
        .expect(({ body }) => expect(body).toContainEqual(createdObject))
    })
  })

  describe('GET /<%= pluralCamelName %>/:id', () => {
    it('responds with a correct object', async () => {
      await agent.get(`${BASE_PATH}/<%= pluralCamelName %>/veryrandomid1234`).expect(200, {
        id: 'veryrandomid1234',
        name: 'Test McTesterson',
        birthDate: '2020-02-01T09:00:00.000Z',
        deathDate: '2021-01-31T09:00:00.000Z',
      })
    })
  })

  describe('PUT /<%= pluralCamelName %>/:id', () => {
    it('responds with an updated object', async () => {
      await agent
        .put(`${BASE_PATH}/<%= pluralCamelName %>/veryrandomid1234`)
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

  describe('PATCH /<%= pluralCamelName %>/:id', () => {
    it('responds with an updated object', async () => {
      await agent
        .patch(`${BASE_PATH}/<%= pluralCamelName %>/veryrandomid1234`)
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

  describe('DELETE /<%= pluralCamelName %>/:id', () => {
    it('deletes an object', async () => {
      await agent.delete(`${BASE_PATH}/<%= pluralCamelName %>/veryrandomid0987`).expect(204)
      await agent.get(`${BASE_PATH}/<%= pluralCamelName %>`).expect(({ body }) => {
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
