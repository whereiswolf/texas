---
to: src/api/<%= name %>/models/<%= singularPascalName %>.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
%>export default class <%= singularPascalName %> {
  id: string
  name: string
  birthDate: Date | string
  deathDate: Date | string
}
