---
to: src/api/<%= name %>/repositories/<%= name %>.repository.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { Service } from 'typedi'
import crypto from 'crypto'
import { <%= singularPascalName %> } from '../models'

const <%= pluralCamelName %>: <%= singularPascalName %>[] = [
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Billy Kid',
    birthDate: new Date(1859, 9, 17).toISOString(),
    deathDate: new Date(1881, 7, 14).toISOString(),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'John Wesley Hardin',
    birthDate: new Date(1853, 5, 26).toISOString(),
    deathDate: new Date(1895, 8, 19).toISOString(),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Tom Ketchum',
    birthDate: new Date(1863, 10, 31).toISOString(),
    deathDate: new Date(1901, 4, 26).toISOString(),
  },
]

@Service()
class <%= pluralPascalName %>Repository {
  find() {
    return <%= pluralCamelName %>
  }

  create(<%= singularCamelName %>Data: Omit<<%= singularPascalName %>, 'id'>) {
    const <%= singularCamelName %>: <%= singularPascalName %> = {
      ...<%= singularCamelName %>Data,
      id: crypto.randomBytes(8).toString('hex'),
    }
    <%= pluralCamelName %>.push(<%= singularCamelName %>)
    return <%= singularCamelName %>
  }

  findById(id: string) {
    return <%= pluralCamelName %>.find((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)
  }

  update(id: string, <%= singularCamelName %>Data: Partial<<%= singularPascalName %>>) {
    const <%= singularCamelName %>Index = <%= pluralCamelName %>.findIndex((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)
    const <%= singularCamelName %>: <%= singularPascalName %> = { ...<%= pluralCamelName %>[<%= singularCamelName %>Index], ...<%= singularCamelName %>Data }
    <%= pluralCamelName %>[<%= singularCamelName %>Index] = <%= singularCamelName %>
    return <%= singularCamelName %>
  }

  delete(id: string) {
    const <%= singularCamelName %>Index = <%= pluralCamelName %>.findIndex((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)
    <%= pluralCamelName %>.splice(<%= singularCamelName %>Index, 1)
    return true
  }
}

export default <%= pluralPascalName %>Repository
