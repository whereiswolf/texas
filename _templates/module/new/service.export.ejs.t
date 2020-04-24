---
to: src/api/<%= name %>/services/index.ts
---
<%
  pluralPascalName = h.changeCase.pascal(name)
%>export { default as <%= pluralPascalName %>Service } from './<%= name %>.service'
