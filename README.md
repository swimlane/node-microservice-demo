# nodejs-seed 
[![Code Climate](https://codeclimate.com/github/swimlane/nodejs-seed/badges/gpa.svg)](https://codeclimate.com/github/swimlane/nodejs-seed)
[![Test Coverage](https://codeclimate.com/github/swimlane/nodejs-seed/badges/coverage.svg)](https://codeclimate.com/github/swimlane/nodejs-seed/coverage)
![spec](http://online.swagger.io/validator?url=https://github.com/swimlane/nodejs-seed/tree/master/src/modules/admin/swagger.yml) 

Example project for:

- Micro-service APIs
- Docker & Docker Compose
- NGINX
- Node 6.x
- TypeScript 2.0
- Express
- Swagger


## Getting Started
- Install [Docker](https://docs.docker.com/engine/installation/) & [Docker Compose](https://docs.docker.com/compose/)
- Install Node 6.x via [nvm](https://github.com/creationix/nvm)
- `npm install`
- `npm start`


## Developing

### Commands
We use [npm scripts](https://docs.npmjs.com/misc/scripts) as our build tool.
Below are the commands for the task runner.

- `npm start`: Builds and starts the project with node-mon
- `npm run clean`: Cleans the dist folder
- `npm run dev`: Builds, watches and starts the project with node-mon
- `npm run debug`: Builds, watches and starts the project with node-inspector
- `npm run lint`: Runs ts-lint code style checks on the project
- `npm run test`: Runs the tests using mocha
- `npm run chk-updates`: Searches for updates to libraries used

### TypeScript
If you are installing a new third-party project, you will likely need to install the typings for that
project like so `npm install @types/body-parser --save-dev`.

When you `npm install` the project, [tslint](http://palantir.github.io/tslint/) is also installed
at the global level. It is advised you setup TSLint in your editor before commiting code. 

### Environment
Database configuration, port setups, etc for NodeJS are maintained yaml config files in `~/config`
via [node-config](https://github.com/lorenwest/node-config).

### Debugging / Profiling

#### Node Inspector
[NodeInspector](https://github.com/node-inspector/node-inspector) is a visual debugging interface
for NodeJS applications based on Chrome DevTools. It offers rich debugging and profiling.

- [Debugging NodeJS in Chrome DevTools](https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools)

#### VSCode
[VSCode](https://code.visualstudio.com/) is a free code editor by Microsoft. It offers 
rich debugging capability and integration with NodeJS and TypeScript. I've pre-configured
VSCode to automatically run build tasks/etc when you click debug.

- [Debugging with VSCode by Jon Pappa](https://johnpapa.net/debugging-with-visual-studio-code/)

#### Webstorm
[Webstorm](https://www.jetbrains.com/webstorm/) is a rich JavaScript IDE by Jetbrains. It offers
advanced code completion, debugging and profiling.

- [Running and debugging NodeJS Apps with Webstorm](https://blog.jetbrains.com/webstorm/2014/02/running-and-debugging-node-js-application/)


## Resources

### Similar Projects
- [Express Micro-service Starter](https://github.com/ph0bos/express-microservice-starter)
- [Express Kit](https://github.com/iamchairs/expresskit)
- [Express TypeScript Starter](https://github.com/rjmacarthy/express-typescript-starter)
- [Microframework](https://github.com/pleerock/microframework)

### References
- [TypeScript Definitions in 2.0](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)
- [Swagger Node - Official](https://github.com/swagger-api/swagger-node)

### Interesting
- [Express OpenAPI](https://github.com/kogosoftwarellc/express-openapi)
- [SwaggerTS](https://github.com/lukeautry/swagger-ts)

### Reads
- [Netflix Scaling Node](https://medium.com/@nodejs/netflixandchill-how-netflix-scales-with-node-js-and-containers-cf63c0b92e57#.9bzn8wm4u)
- [Building Microservices with OpenSource Technologies](http://www.developer.com/open/building-microservices-with-open-source-technologies.html)
- [Docker Micro-services with Node](http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/)
