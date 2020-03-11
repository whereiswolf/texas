---
to: src/api/<%= name %>/services/index.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
%>import { <%= singularPascalName %> } from 'models'

export const addSmile = (<%= singularCamelName %>: <%= singularPascalName %>): <%= singularPascalName %> => ({
  ...<%= singularCamelName %>,
  text: `${<%= singularCamelName %>.text} :)`,
})

export const mapSmiles = (<%= pluralCamelName %>: <%= singularPascalName %>[]): <%= singularPascalName %>[] =>
  <%= pluralCamelName %>.map(addSmile)
