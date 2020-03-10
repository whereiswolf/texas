---
to: src/api/<%= name %>/repository/index.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
%>import { <%= singularPascalName %> } from 'models'

export const find = (): <%= singularPascalName %>[] => [{ id: 'id-123', text: 'test' }]

export const create = (<%= singularCamelName %>: <%= singularPascalName %>): <%= singularPascalName %> => ({
  id: 'id-123',
  ...<%= singularCamelName %>,
})

export const findById = (id: string): <%= singularPascalName %> => ({ id, text: 'test' })

export const update = (id: string, <%= singularCamelName %>: <%= singularPascalName %>): <%= singularPascalName %> => ({
  ...<%= singularCamelName %>,
  id,
})

export const remove = (id: string) => id
