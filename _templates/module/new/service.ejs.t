---
to: src/api/<%= name %>/services/<%= name %>.service.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { Service } from 'typedi'
import { <%= pluralPascalName %>Repository } from '../repositories'
import { <%= singularPascalName %> } from '../models'

@Service()
class <%= pluralPascalName %>Service {
  constructor(private readonly <%= pluralCamelName %>Repository: <%= pluralPascalName %>Repository) {}

  getAll<%= pluralPascalName %>() {
    return this.<%= pluralCamelName %>Repository.find()
  }

  create<%= singularPascalName %>(<%= singularCamelName %>Data: Omit<<%= singularPascalName %>, 'id'>) {
    return this.<%= pluralCamelName %>Repository.create(<%= singularCamelName %>Data)
  }

  get<%= singularPascalName %>ById(id: string) {
    return this.<%= pluralCamelName %>Repository.findById(id)
  }

  update<%= singularPascalName %>(id: string, data: Omit<<%= singularPascalName %>, 'id'>) {
    return this.<%= pluralCamelName %>Repository.update(id, data)
  }

  patch<%= singularPascalName %>(id: string, data: Partial<Omit<<%= singularPascalName %>, 'id'>>) {
    return this.<%= pluralCamelName %>Repository.update(id, data)
  }

  delete<%= singularPascalName %>(id: string) {
    return this.<%= pluralCamelName %>Repository.delete(id)
  }
}

export default <%= pluralPascalName %>Service
