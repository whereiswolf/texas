# Texas
**T**ypeScript, **Ex**press **A**pp **S**caffolding

![version](https://img.shields.io/github/package-json/v/whereiswolf/texas) [![Known Vulnerabilities](https://snyk.io/test/github/whereiswolf/texas/badge.svg)](https://snyk.io/test/github/whereiswolf/texas) ![express](https://img.shields.io/github/package-json/dependency-version/whereiswolf/texas/express?color=lightgrey) ![node version](https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen) ![typescript](https://camo.githubusercontent.com/41c68e9f29c6caccc084e5a147e0abd5f392d9bc/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f7374726963742532302546302539462539322541412f626c7565) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) ![node version](https://img.shields.io/github/license/whereiswolf/texas)

Texas is yet another boilerplate for creating [Express](https://expressjs.com/) back-end applications with [Node.js](https://nodejs.org/en/) and [TypeScript](https://www.typescriptlang.org/). It ships with semantic versioning scripts, linting on git hooks and more.

## Features
- ⚙️ **Project configuration**: TypeScript, [eslint](https://eslint.org/) and [prettier](https://prettier.io/) are all ready to go. In addition, git hooks trigger code linting, thanks to [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky). The repo uses [standard-version](https://github.com/conventional-changelog/standard-version) for generating changelog and [semver](https://semver.org/) compliant tags.
- ⚡ **Basic application**: The project contains basic API with [cors]() and [body-parser]() set up. There's also [morgan](https://github.com/expressjs/morgan) for logging, [express-status-monitor](https://github.com/RafalWilinski/express-status-monitor) for checking server status and [Joi](https://github.com/hapijs/joi) for validation.
- 📗 **API Documentation**: Out of the box the app automagically generates the Swagger UI based on JSDocs! [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) and [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) are already configured.
- 🐛 **Debugging and testing**: The repo contains setup for [VS Code](https://code.visualstudio.com/)'s Debugger as well as for [Jest](https://jestjs.io/) tests.
- 🐳 **Dockerization**: There are already [Dockerfile](https://docs.docker.com/engine/reference/builder/) and a [docker-compose](https://docs.docker.com/compose/) files ready to run the app in a container. Though you might want to consider extending the config with a database container.
> *Work in progress...*
>- 🖨️ **Generating project structure**: You can use [Hygen](https://www.hygen.io/) scripts and templates to create new modules, controllers or adjust them to fit your own project structure.


## What's not included
- Database and ORM/ODM configuration.
- Websockets.
- Authentication and authorization solutions.
- And probably many other components you might need.

The project aims at providing a basic express application that you can extend with the features you need. Sometimes you might want to use MongoDB / Mongoose combo, other times PostgreSQL with TypeORM. The final solution is up to you, but so is the implementation.

...

...


##### To be continued