import { Example } from 'models'

export const find = (): Example[] => [{ id: 'id-123', text: 'test' }]

export const create = (example: Example): Example => ({
  id: 'id-123',
  ...example,
})

export const findById = (id: string): Example => ({ id, text: 'test' })

export const update = (id: string, example: Example): Example => ({
  ...example,
  id,
})

export const remove = (id: string) => id
