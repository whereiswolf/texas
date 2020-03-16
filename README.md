# Texas
**T**ypeScript, **Ex**press **A**pp **S**caffolding

![version](https://img.shields.io/github/package-json/v/whereiswolf/texas) [![Dependencies](https://david-dm.org/whereiswolf/texas.svg)](https://david-dm.org/whereiswolf/texas) [![Dev Dependencies](https://david-dm.org/whereiswolf/texas/dev-status.svg)](https://david-dm.org/whereiswolf/texas?type=dev) [![express](https://img.shields.io/github/package-json/dependency-version/whereiswolf/texas/express?color=lightgrey)](https://expressjs.com/) [![node version](https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen)](https://nodejs.org/en/) [![typescript](https://camo.githubusercontent.com/41c68e9f29c6caccc084e5a147e0abd5f392d9bc/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f7374726963742532302546302539462539322541412f626c7565)](https://www.typescriptlang.org/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![Renovate](https://img.shields.io/badge/Renovate-enabled-blue)](https://renovate.whitesourcesoftware.com/) [![license](https://img.shields.io/github/license/whereiswolf/texas)](LICENSE.md)

Texas is yet another boilerplate for creating [Express](https://expressjs.com/) back-end applications with [Node.js](https://nodejs.org/en/) and [TypeScript](https://www.typescriptlang.org/). It ships with semantic versioning scripts, linting on git hooks and more.

## Content
- [Features](#features)
- [Getting started](#getting-started-🚀)
- [Project structure](#project-structure-📁)
- [Development](#development-🧑‍💻)
- [Building](#building-👷)
- [Testing](#testing-🧪)
- [Releasing](#releasing-🏷️)
- [Contributing](#contributing-❤️)

## Features
- ⚙️ **Project configuration**: TypeScript, [eslint](https://eslint.org/) and [prettier](https://prettier.io/) are all ready to go. In addition, git hooks trigger code linting, thanks to [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky). The repo uses [standard-version](https://github.com/conventional-changelog/standard-version) for generating changelog and [semver](https://semver.org/) compliant tags.
- ⚡ **Basic application**: The project contains basic API with [cors]() and [body-parser]() set up. There's also [morgan](https://github.com/expressjs/morgan) for logging, [express-status-monitor](https://github.com/RafalWilinski/express-status-monitor) for checking server status and [Joi](https://github.com/hapijs/joi) for validation.
- 📗 **API Documentation**: Out of the box the app automagically generates the Swagger UI based on JSDocs! [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) and [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) are already configured.
- 🐛 **Debugging and testing**: The repo contains setup for [VS Code](https://code.visualstudio.com/)'s Debugger as well as for [Jest](https://jestjs.io/) tests.
- 🐳 **Dockerization**: There are already [Dockerfile](https://docs.docker.com/engine/reference/builder/) and a [docker-compose](https://docs.docker.com/compose/) files ready to run the app in a container. Though you might want to consider extending the config with a database container.
- 🖨️ **Generating project structure**: You can use [Hygen](https://www.hygen.io/) scripts and templates to create new modules, controllers or adjust them to fit your own project structure.


##### What's not included
- Database and ORM/ODM configuration.
- Websockets.
- Authentication and authorization solutions.
- And probably many other components you might need.

The project aims at providing a basic express application that you can extend with the features you need. Sometimes you might want to use MongoDB / Mongoose combo, other times PostgreSQL with TypeORM. The final solution is up to you, but so is the implementation.

## Getting Started 🚀

#### Installation
Prerequisities:
- [Node.js](https://nodejs.org/en/) version `12.0.0` or newer.
- [Yarn](https://yarnpkg.com/) version `1.21.0` or newer.

Before installing project dependencies, download and install [Yarn](https://yarnpkg.com/) and [Node.js](https://nodejs.org/en/). Next, clone the repository and install project dependencies using: 
```bash
$ git clone https://github.com/whereiswolf/texas.git
$ cd texas/
$ yarn install
```
After the installation is complete, you can clear the git history with the following command:
```bash
$ yarn clean:git
```
**Warning:** *The above command removes the project's `.git/` directory. Use with caution.* 

#### Configuration
Before you run the app, you might want to set up environment variables. In order to do so, you may copy the `.env.example` file to `.env` and modify it's content.
```bash
$ cp .env.example .env
``` 

## Project structure 📁
The default project structure is as follows:
```
|- _templates/
|- .docker/
    |- app.Dockerfile
    |- docker-compose.yml
|- src/
    |- api/
        |- cats/
            |- controllers/
            |- repository/
            |- routes/
            |- schemas/
            |- services/
            |- index.ts
        |- dogs/
            |- ...
        |- index.ts
    |- config/
        |- index.ts
        |- swagger.ts
    |- middlewares/
    |- models/
    |- server.ts
|- .env
|- .env.example
|- package.json
|- ...
```
To create new modules in the app in accordance with a defined folder structure, you can use [Hygen's](https://www.hygen.io/) templates located in `_templates/` directory. In order to do so, run the following command:
```bash
$ yarn new:module moduleName # use plural name, e.g. "products"
```
The script will create a new module, add necessary imports and exports, as well as some examplary functions and tests.

Remember that you don't have to follow the provided folder structure, but you can adjust it to your liking.

## Development 🧑‍💻

To run the app in development mode use the command:
```bash
$ yarn dev
```
The script will start [ts-node](https://github.com/TypeStrong/ts-node) with [nodemon](https://github.com/remy/nodemon), what means that the app will rebuild every time you save the source files.

## Building 👷

**Build and run**
To build and start the app use the following command:
```bash
$ yarn start:local
```
The script will build the app using `yarn build`, then run the transpiled app with `node dist/server.js`. Use it for running the built app locally, without hot reloading.

**Docker**
To build the app's image(s) and run container(s) use:
```bash
$ yarn docker
```
It will build a Docker image(s) and run the container(s) with `docker-compose`. Docker files ale located in `.docker/` directory.

## Testing 🧪
The project uses [Jest](https://jestjs.io/) as a test runner, and [jest-express](https://github.com/jameswlane/jest-express) to mock Express. To run tests use:
```bash
$ yarn test
```

## Releasing 🏷️
Following [Conventional Commits](https://conventionalcommits.org/) guidelines the project uses [standard-version](https://github.com/conventional-changelog/standard-version) to release versions. With the provided scripts you are able to tag the version based on the commits and create a chanelog file.

#### Beta
Use the following script to tag a beta version:
```bash
$ yarn release:beta
```

#### Production
Use the following script to tag a production version:
```bash
$ yarn release
```
*Note: you need to push created tags to the origin or extend the scripts.*

## Contributing ❤️
Any contributions you make will be greatly appreciated. If you want to change or add anything - submit a PR. You have a question or found a bug - create an issue. Thanks in advance! 😃
