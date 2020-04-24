---
inject: true
to: src/api/index.ts
before: \]
---
<%
  pluralCamelName = h.changeCase.camel(name)
%>  <%= pluralCamelName %>,