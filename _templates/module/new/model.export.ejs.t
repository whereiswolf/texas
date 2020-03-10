---
inject: true
to: src/models/index.ts
prepend: true
---
export { default as <%= singularPascalName %> } from './<%= singularPascalName %>'