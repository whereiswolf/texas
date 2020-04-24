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

const <%= pluralCamelName %>Mock: <%= singularPascalName %>[] = [
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Billy Kid',
    birthDate: new Date(1859, 9, 17),
    deathDate: new Date(1881, 7, 14),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'John Wesley Hardin',
    birthDate: new Date(1853, 5, 26),
    deathDate: new Date(1895, 8, 19),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Tom Ketchum',
    birthDate: new Date(1863, 10, 31),
    deathDate: new Date(1901, 4, 26),
  },
]

@Service()
class <%= pluralPascalName %>Repository {
  constructor(private <%= pluralCamelName %>: <%= singularPascalName %>[] = <%= pluralCamelName %>Mock) {}

  find() {
    return this.<%= pluralCamelName %>
  }

  create(<%= singularCamelName %>Data: Omit<<%= singularPascalName %>, 'id'>) {
    const <%= singularCamelName %>: <%= singularPascalName %> = {
      ...<%= singularCamelName %>Data,
      id: crypto.randomBytes(8).toString('hex'),
    }
    this.<%= pluralCamelName %>.push(<%= singularCamelName %>)
    return <%= singularCamelName %>
  }

  findById(id: string) {
    return this.<%= pluralCamelName %>.find((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)
  }

  update(id: string, <%= singularCamelName %>Data: Partial<<%= singularPascalName %>>) {
    const <%= singularCamelName %>Index = this.<%= pluralCamelName %>.findIndex((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)
    const <%= singularCamelName %>: <%= singularPascalName %> = { ...this.<%= pluralCamelName %>[<%= singularCamelName %>Index], ...<%= singularCamelName %>Data }
    this.<%= pluralCamelName %>[<%= singularCamelName %>Index] = <%= singularCamelName %>
    return <%= singularCamelName %>
  }

  delete(id: string) {
    const <%= singularCamelName %>Index = this.<%= pluralCamelName %>.findIndex((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)
    this.<%= pluralCamelName %>.splice(<%= singularCamelName %>Index, 1)
    return true
  }
}

export default <%= pluralPascalName %>Repository
