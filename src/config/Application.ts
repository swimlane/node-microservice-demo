import { ExpressConfig } from './Express';

export class Application {

  app: any;
  server: any;

  constructor()  {
    this.app = new ExpressConfig();

    // POC
    this.app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    this.app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
  }

}