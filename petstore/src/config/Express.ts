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
import * as expressJwt from 'express-jwt';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';

export class ExpressConfig {

  app: express.Express;
  jwt: any;

  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.setupLogging();
    this.setupJwt();
    this.setupSwagger();
    this.setupControllers();
  }

  setupJwt() {
    const jwtSecret = config.get('auth.jwt_secret').toString();
    this.jwt = expressJwt({
      secret: new Buffer(jwtSecret, 'base64')
    });
  }

  setupSwagger() {
    // resolve the spec
    const spath = path.resolve('swagger.yml');
    const file = fs.readFileSync(spath, 'utf8');
    const spec = yaml.safeLoad(file);
    
    // setup middleware swagger middleware in express
    swaggerTools.initializeMiddleware(spec, (middleware) => {
      this.app.use(middleware.swaggerMetadata());
      this.app.use(this.setupSwaggerSecurity(middleware));
      this.app.use(middleware.swaggerUi());
      this.app.use(middleware.swaggerValidator({
        validateResponse: true
      }));
    });
  }

  setupSwaggerSecurity(middleware) {
    return middleware.swaggerSecurity({
      jwt_token: (req, authOrSecDef, scopes, cb) => {
        this.jwt(req, req.res, (err) => {
          if (req.userName === undefined) {
            return cb(new Error('Access Denied!'));
          } else {
            logger.info(`${req.userName} authorized`, req.userName);
            return cb(null);
          }
        });
      }
    });
  }

  setupControllers() {
    const controllersPath = path.resolve('dist', 'controllers');
    useExpressServer(this.app, {
      controllerDirs: [ controllersPath ]
    });
  }

  setupLogging() {
    // error logging
    this.app.use(expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));

    // request logging
    this.app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));
  }

}
