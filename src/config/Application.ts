import { ExpressConfig } from './Express';
import '../common/logging';
import * as config from 'config';

export class Application {

  server: any;

  constructor()  {
    let express = new ExpressConfig();
    const port = config.get('express.port');
    this.server = express.app.listen(port, () => {
      console.log(`Express started: http://localhost:${port}`);
    });
  }

}
