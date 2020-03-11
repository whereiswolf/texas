---
inject: true
to: src/api/index.ts
after: import { Router } from 'express'
---
import <%= name %> from './<%= name %>'