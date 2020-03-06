import { find, create } from '../repository'

describe('examples module repository', () => {
  it('finds examples', async () => {
    const examples = find()
    expect(examples).toEqual([{ id: 1, text: 'test' }])
  })

  it('creates an example', async () => {
    const createdExample = create({ text: 'test' })
    expect(createdExample).toEqual({ id: 1, text: 'test' })
  })
})
