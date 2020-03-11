---
to: src/api/<%= name %>/repository/index.spec.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
%>import { find, findById, create, update, remove } from '../repository'

describe('<%= pluralCamelName %> module repository', () => {
  it('finds <%= pluralCamelName %>', async () => {
    const <%= pluralCamelName %> = find()
    expect(<%= pluralCamelName %>).toEqual([{ id: 'id-123', text: 'test' }])
  })

  it('finds <%= singularCamelName %> by id', async () => {
    const <%= singularCamelName %> = findById('id-123')
    expect(<%= singularCamelName %>).toEqual({ id: 'id-123', text: 'test' })
  })

  it('creates <%= singularCamelName %>', async () => {
    const created<%= singularPascalName %> = create({ text: 'test' })
    expect(created<%= singularPascalName %>).toEqual({ id: 'id-123', text: 'test' })
  })

  it('updates <%= singularCamelName %>', async () => {
    const updated<%= singularPascalName %> = update('id-123', { text: 'test' })
    expect(updated<%= singularPascalName %>).toEqual({ id: 'id-123', text: 'test' })
  })

  it('deletes <%= singularCamelName %>', async () => {
    const removed<%= singularPascalName %>Id = remove('id-123')
    expect(removed<%= singularPascalName %>Id).toEqual('id-123')
  })
})
