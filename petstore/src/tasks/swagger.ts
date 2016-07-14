import * as swaggerJSDoc from 'swagger-jsdoc';
import * as fs from 'fs';
import * as glob from 'glob';

let ctrls = glob.sync('./dist/controllers/*.js');
let models = glob.sync('./dist/models/*.js');
let { version, name, description } = require('../../package.json');

const options = {
  swaggerDefinition: {
    info: {
      title: name,
      version,
      description
    }
  },
  apis: [ ...models, ...ctrls ]
};

const spec = swaggerJSDoc(options);
fs.writeFile('./dist/spec.json', JSON.stringify(spec, null, '\t'));
