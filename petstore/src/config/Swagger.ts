import * as fs from 'fs';
import * as path from 'path';

import * as swaggerTools from 'swagger-tools';
import * as yaml from 'js-yaml';
import * as passport from 'passport';

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
    jwt_token: (req, authOrSecDef, scopes, callback) => {
      passport.authenticate('jwt', function(err, user, info) {
        if(err) callback(new Error('Error in passport authenticate'));
        if(!user) callback(new Error('Failed to authenticate oAuth token'));
        req.user = user;
        return callback();
      })(req, null, callback);
    }
  });
};
