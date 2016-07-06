import * as fs from 'fs';
import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as yaml from 'js-yaml';
import * as cors from 'cors';

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
    const spath = path.resolve('swagger.yml');
    const file = fs.readFileSync(spath, 'utf8');
    const spec = yaml.safeLoad(file);

    swaggerTools.initializeMiddleware(spec, (middleware) => {
      this.app.use(middleware.swaggerMetadata());
      this.app.use(middleware.swaggerValidator());
      this.app.use(middleware.swaggerUi());
    });
  }

  setupControllers() {
    const controllersPath = path.resolve(__dirname, '../controllers');
    useExpressServer(this.app, {
      controllerDirs: [ controllersPath ]
    });
  }

}
