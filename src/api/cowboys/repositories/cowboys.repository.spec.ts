let id = 0
jest.mock('crypto', () => ({
  randomBytes: () => ({ toString: () => `id-${++id}` }),
}))

import CowboysRepository from './cowboys.repository'

describe('cowboys repository', () => {
  describe('find', () => {
    it('finds and returns a list of all cowboys', () => {
      const repository = new CowboysRepository()
      const cowboys = repository.find()
      expect(cowboys).toEqual([
        {
          id: 'id-1',
          name: 'Billy Kid',
          birthDate: '1859-10-16T22:36:00.000Z',
          deathDate: '1881-08-13T22:36:00.000Z',
        },
        {
          id: 'id-2',
          name: 'John Wesley Hardin',
          birthDate: '1853-06-25T22:36:00.000Z',
          deathDate: '1895-09-18T22:36:00.000Z',
        },
        {
          id: 'id-3',
          name: 'Tom Ketchum',
          birthDate: '1863-11-30T22:36:00.000Z',
          deathDate: '1901-05-25T22:36:00.000Z',
        },
      ])
    })
  })

  describe('findById', () => {
    it('finds and returns cowboy by id', () => {
      const repository = new CowboysRepository()
      const cowboy = repository.findById('id-2')
      expect(cowboy).toEqual({
        id: 'id-2',
        name: 'John Wesley Hardin',
        birthDate: '1853-06-25T22:36:00.000Z',
        deathDate: '1895-09-18T22:36:00.000Z',
      })
    })
  })

  describe('create', () => {
    it('creates and returns new cowboy', () => {
      const repository = new CowboysRepository()
      const cowboyData = {
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      }

      const cowboy = repository.create(cowboyData)
      expect(typeof cowboy.id).toBe('string')
      expect(cowboy.name).toBe('Test Test')
      expect(cowboy.birthDate).toBe('2019-04-13T13:31:33.402Z')
      expect(cowboy.deathDate).toBe('2022-04-13T13:31:33.402Z')
    })
  })

  describe('update', () => {
    it('updates and returns cowboy', () => {
      const repository = new CowboysRepository()
      const id = 'id-2'
      const cowboyData = {
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      }

      const cowboy = repository.update(id, cowboyData)
      expect(cowboy).toEqual({
        id: 'id-2',
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      })
    })
  })

  describe('delete', () => {
    it('deletes cowboy', () => {
      const repository = new CowboysRepository()
      const id = 'id-2'

      repository.delete(id)

      const cowboys = repository.find()
      expect(cowboys.find((cowboy) => cowboy.id === id)).toBeUndefined()
    })
  })
})
