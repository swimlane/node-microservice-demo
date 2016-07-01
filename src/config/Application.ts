import { ExpressConfig } from './Express';
import { logger } from '../common/logging';
import * as config from 'config';

export class Application {

  server: any;

  constructor()  {
    let express = new ExpressConfig();
    const port = config.get('express.port');

    this.server = express.app.listen(port, () => {
      logger.info(`Express started: http://localhost:${port}`);
    });
  }

}
