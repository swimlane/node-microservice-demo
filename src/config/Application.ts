import { ExpressConfig } from './Express';

export class Application {

  server: any;

  constructor()  {
    let express = new ExpressConfig();

    // POC
    express.server.get('/', function (req, res) {
      res.send('Hello World!');
    });

    const port = process.env.EXPRESS_PORT;
    this.server = express.server.listen(port, function () {
      console.log('Example app listening on port 3000!');
    });
  }

}
