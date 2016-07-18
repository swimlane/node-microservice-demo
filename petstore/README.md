# Petstore Micro-service 
NodeJS micro-service for the petstore module.

## Getting Started

### Pre-reqs
- Install Node 6.x via [nvm](https://github.com/creationix/nvm)

### Install
- `npm install`
- `npm start`

## Developing

### Commands
We use [npm scripts](https://docs.npmjs.com/misc/scripts) as our build tool. Refer to the package.json script's entry for list of scripts.

### TypeScript
If you are installing a new third-party project, you will likely need to install the typings for that
project like so `npm install @types/body-parser --save-dev`. If types are not available
for your module [read here](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#shorthand-ambient-module-declarations)

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
