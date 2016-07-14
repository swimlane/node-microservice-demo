import * as fs from 'fs';
import * as path from 'path';

import * as swaggerTools from 'swagger-tools';
import * as yaml from 'js-yaml';
import { logger } from '../common/logging';
import { setupJwt } from './Authentication';

// setup auth
let jwt = setupJwt();

export function setupSwagger(app) {
  // resolve the spec
  const spath = path.resolve('swagger.yml');
  const file = fs.readFileSync(spath, 'utf8');
  const spec = yaml.safeLoad(file);

  // setup middleware swagger middleware in express
  swaggerTools.initializeMiddleware(spec, (middleware) => {
    app.use(middleware.swaggerUi());
    app.use(middleware.swaggerMetadata());
    app.use(setupSwaggerSecurity(middleware));
    app.use(middleware.swaggerValidator({
      validateResponse: true
    }));
  });
};

function setupSwaggerSecurity(middleware) {
  return middleware.swaggerSecurity({
    jwt_token: (req, authOrSecDef, scopes, cb) => {
      jwt(req, req.res, (err) => {
        if (req.userName === undefined) {
          return cb(new Error('Access Denied!'));
        } else {
          logger.info(`${req.userName} authorized`, req.userName);
          return cb(null);
        }
      });
    }
  });
};
