import { Controller, Get } from 'routing-controllers';
import * as os from 'os';

@Controller('/stats')
export class StatsController {

  version: any;

  constructor() {
    let pkg = require('../../package.json');
    this.version = pkg.version;
  }

  @Get('/')
  get() {
    return {
      os: {
        hostname: os.hostname(),
        arch: os.arch(),
        type: os.type(),
        release: os.release()
      },
      versions: this.version
    };
  }

}
