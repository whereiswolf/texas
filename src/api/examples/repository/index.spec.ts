import { find, findById, create, update, remove } from '../repository'

describe('examples module repository', () => {
  it('finds examples', async () => {
    const examples = find()
    expect(examples).toEqual([{ id: 'id-123', text: 'test' }])
  })

  it('finds example by id', async () => {
    const example = findById('id-123')
    expect(example).toEqual({ id: 'id-123', text: 'test' })
  })

  it('creates example', async () => {
    const createdExample = create({ text: 'test' })
    expect(createdExample).toEqual({ id: 'id-123', text: 'test' })
  })

  it('updates example', async () => {
    const updatedExample = update('id-123', { text: 'test' })
    expect(updatedExample).toEqual({ id: 'id-123', text: 'test' })
  })

  it('deletes example', async () => {
    const removedExampleId = remove('id-123')
    expect(removedExampleId).toEqual('id-123')
  })
})
