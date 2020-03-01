import { Example } from 'models'

export const find = (): Example[] => [{ id: 1, text: 'Example' }]

export const create = (example: Example): Example => example
