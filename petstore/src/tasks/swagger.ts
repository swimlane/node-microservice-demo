import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

const spath = path.resolve('swagger.yml');
const file = fs.readFileSync(spath, 'utf8');
const spec = yaml.safeLoad(file);

// TODO
