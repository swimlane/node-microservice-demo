import { ExpressConfig } from './Express';
import * as config from 'config';

export class Application {

  server: any;

  constructor()  {
    let express = new ExpressConfig();

    // POC
    express.app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    const port = config.get('express.port');
    this.server = express.app.listen(port, () => {
      console.log(`Express started: http://localhost:${port}`);
    });
  }

}
