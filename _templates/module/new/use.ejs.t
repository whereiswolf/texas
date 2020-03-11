---
inject: true
to: src/api/index.ts
after: router.use
---
<%
  pluralKebabName = h.changeCase.kebab(name)
%>router.use('/<%= pluralKebabName %>', <%= name %>)