---
inject: true
to: src/middlewares/index.ts
prepend: true
---
export { default as <%= name %> } from './<%= name %>'