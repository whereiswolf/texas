---
to: src/api/<%= name %>/repositories/index.ts
---
<%
  pluralPascalName = h.changeCase.pascal(name)
%>export { default as <%= pluralPascalName %>Repository } from './<%= name %>.repository'
