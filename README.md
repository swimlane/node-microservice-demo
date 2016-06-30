# nodejs-seed
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

### TypeScript
`nodejs-seed` uses [ts-node](https://github.com/TypeStrong/ts-node) for on-the-fly compilation. 

If you are installing a new project, you will likely need to install the typings for that
project like so `npm install @types/body-parser --save-dev`.

When you `npm install` the project, [tslint](http://palantir.github.io/tslint/) is also installed
at the global level. It is advised you setup TSLint in your editor before commiting code. 

### Environment
Database configuration, port setups, etc for NodeJS are maintained yaml config files in `~/config`
via [node-config](https://github.com/lorenwest/node-config).

### Server
When changes are made to files, your server will automatically reload via [nodemon](http://nodemon.io/). Nodemon is
invoked by default when you do `npm start`.

### Debugging
Webstorm, Visual Studio Code and [NodeInspector](https://github.com/node-inspector/node-inspector) are recommended tools
for breakpoint and performance debugging.

## Resources

### Similar Projects
- [Express Micro-service Starter](https://github.com/ph0bos/express-microservice-starter)
- [Express Kit](https://github.com/iamchairs/expresskit)
- [Express TypeScript Starter](https://github.com/rjmacarthy/express-typescript-starter)
- [Microframework](https://github.com/pleerock/microframework)

### References
- [TypeScript Definitions in 2.0](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)
- [Swagger Node - Official](https://github.com/swagger-api/swagger-node)
- [Express OpenAPI](https://github.com/kogosoftwarellc/express-openapi)

### Reads
- [Netflix Scaling Node](https://medium.com/@nodejs/netflixandchill-how-netflix-scales-with-node-js-and-containers-cf63c0b92e57#.9bzn8wm4u)
- [Building Microservices with OpenSource Technologies](http://www.developer.com/open/building-microservices-with-open-source-technologies.html)
- [Docker Micro-services with Node](http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/)
