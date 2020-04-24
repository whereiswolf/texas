---
to: src/api/<%= name %>/services/<%= name %>.service.spec.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { mocked } from 'ts-jest/utils'
import <%= pluralPascalName %>Service from './<%= name %>.service'
import { <%= singularPascalName %> } from '../models'

class <%= pluralPascalName %>Repository {
  find = jest.fn()
  findById = jest.fn()
  create = jest.fn()
  update = jest.fn()
  delete = jest.fn()
}

describe('<%= pluralCamelName %> service', () => {
  const repository = new <%= pluralPascalName %>Repository()
  const service = new <%= pluralPascalName %>Service(repository as any)

  describe('getAll<%= pluralPascalName %>', () => {
    it('returns a list of all <%= pluralCamelName %> in the repository', () => {
      mocked(repository.find).mockReturnValueOnce([
        {
          id: 'id-123',
          name: 'Test',
          birthDate: '2020-04-13T13:31:33.402Z',
          deathDate: '2020-04-13T13:31:33.402Z',
        },
      ])

      const <%= pluralCamelName %> = service.getAll<%= pluralPascalName %>()
      expect(<%= pluralCamelName %>).toEqual([
        {
          id: 'id-123',
          name: 'Test',
          birthDate: '2020-04-13T13:31:33.402Z',
          deathDate: '2020-04-13T13:31:33.402Z',
        },
      ])
    })
  })

  describe('create<%= singularPascalName %>', () => {
    it('creates and returns a new <%= singularCamelName %> in the repository', () => {
      const <%= singularCamelName %>Data: Omit<<%= singularPascalName %>, 'id'> = {
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      }
      mocked(repository.create).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const created<%= singularPascalName %> = service.create<%= singularPascalName %>(<%= singularCamelName %>Data)

      expect(repository.create).toBeCalledWith(<%= singularCamelName %>Data)
      expect(created<%= singularPascalName %>).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('get<%= singularPascalName %>ById', () => {
    it('returns <%= singularCamelName %> from repository found by id', () => {
      mocked(repository.findById).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const <%= singularCamelName %> = service.get<%= singularPascalName %>ById('test-id')

      expect(repository.findById).toBeCalledWith('test-id')
      expect(<%= singularCamelName %>).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('update<%= singularPascalName %>', () => {
    it('updates and returns <%= singularCamelName %> in the repository', () => {
      const id = 'test-id'
      const <%= singularCamelName %>Data: Omit<<%= singularPascalName %>, 'id'> = {
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      }
      mocked(repository.update).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const updated<%= singularPascalName %> = service.update<%= singularPascalName %>(id, <%= singularCamelName %>Data)

      expect(repository.update).toBeCalledWith(id, <%= singularCamelName %>Data)
      expect(updated<%= singularPascalName %>).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('patch<%= singularPascalName %>', () => {
    it('patches and returns <%= singularCamelName %> in the repository', () => {
      const id = 'test-id'
      const <%= singularCamelName %>Data: Partial<<%= singularPascalName %>> = { name: 'Test' }
      mocked(repository.update).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const updated<%= singularPascalName %> = service.patch<%= singularPascalName %>(id, <%= singularCamelName %>Data)

      expect(repository.update).toBeCalledWith(id, <%= singularCamelName %>Data)
      expect(updated<%= singularPascalName %>).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('delete<%= singularPascalName %>', () => {
    it('deletes <%= singularCamelName %> from the repository', () => {
      const id = 'test-id'
      mocked(repository.delete).mockReturnValueOnce(true)

      const isDeleted = service.delete<%= singularPascalName %>(id)
      expect(repository.delete).toBeCalledWith(id)
      expect(isDeleted).toBe(true)
    })
  })
})
