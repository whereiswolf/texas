import { Example } from 'models'

export const find = (): Example[] => [{ id: 1, text: 'test' }]

export const create = ({ text }: { text: string }): Example => ({ id: 1, text })
