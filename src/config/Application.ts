import { ExpressConfig } from './Express';
import * as config from 'config';

export class Application {

  server: any;

  constructor()  {
    let express = new ExpressConfig();

    // POC
    express.server.get('/', function (req, res) {
      res.send('Hello World!');
    });

    const port = config.get('express.port');
    this.server = express.server.listen(port, function () {
      console.log(`Express started on http://localhost:${port}`);
    });
  }

}
