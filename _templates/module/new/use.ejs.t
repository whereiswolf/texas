---
inject: true
to: src/api/index.ts
after: router.use
---
router.use('/<%= name %>', <%= name %>)