---
inject: true
to: src/shared/middlewares/index.ts
prepend: true
---
<%
  pascalName = h.changeCase.pascal(name)
%>export { default as <%= pascalName %>Middleware } from './<%= name %>.middleware'