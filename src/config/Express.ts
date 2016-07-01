import * as fs from 'fs';
import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as yaml from 'js-yaml';
import * as cors from 'cors';

import { useExpressServer } from 'routing-controllers';
import * as openApiDefaults from 'express-openapi-defaults';
import * as openApiCoercion from 'express-openapi-coercion';
import * as openApiValidation from 'express-openapi-validation';

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
    const spath = path.resolve(__dirname, '../../src/modules/pet-store/swagger.yml');
    const file = fs.readFileSync(spath, 'utf8');
    const spec = yaml.safeLoad(file);
    
    //this.app.use(openApiDefaults(spec));
    //this.app.use(openApiCoercion(spec));
    //this.app.use(openApiValidation(spec));
  }

  setupControllers() {
    const spath = path.resolve(__dirname, '../modules/pet-store/controllers');

    useExpressServer(this.app, {
      routePrefix: '/api',
      controllerDirs: [ spath ]
    });
  }

}
