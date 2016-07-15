import * as fs from 'fs';
import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as yaml from 'js-yaml';
import * as cors from 'cors';
import * as config from 'config';
import { logger } from '../common/logging';

import { useExpressServer } from 'routing-controllers';
import * as swaggerTools from 'swagger-tools';

export class ExpressConfig {

  app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.setupSwagger();
    this.setupControllers();
  }

  setupSwagger() {
    // resolve the spec

    const spath = path.resolve('swagger.yml');
    const file = fs.readFileSync(spath, 'utf8');
    const spec = yaml.safeLoad(file);

    // init jwt middleware
    // const jwtSecret = config.get('auth.jwt_secret').toString();
    // let jwt = expressJwt({
    //  secret: new Buffer(jwtSecret, 'base64')
    // });

    // setup middleware swagger middleware in express
    swaggerTools.initializeMiddleware(spec, (middleware) => {
      this.app.use(middleware.swaggerMetadata());

      this.app.use(middleware.swaggerValidator({
        validateResponse: true
      }));

      /*
      this.app.use(middleware.swaggerSecurity({
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
      }));
      */

      this.app.use(middleware.swaggerUi());
    });
  }

  setupControllers() {
    const controllersPath = path.resolve('dist', 'controllers');
    useExpressServer(this.app, {
      controllerDirs: [ controllersPath ]
    });
  }

}
