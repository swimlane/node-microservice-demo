import { ExpressConfig } from './Express';
import { logger } from '../common/logging';
import * as config from 'config';

export class Application {

  server: any;

  constructor()  {
    let express = new ExpressConfig();
    const port = config.get('express.port');

    this.server = express.app.listen(port, () => {
      logger.info(`
            ,,,         ,,,
          ;"   ^;     ;'   ",
          ;    s$$$$$$$s     ;
          ,  ss$$$$$$$$$$s  ,'
          ;s$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$
         $$$$P""Y$$$Y""W$$$$$
         $$$$  p"$$$"q  $$$$$
         $$$$  .$$$$$.  $$$$
          $$DcaU$$$$$$$$$$
            "Y$$$"*"$$$Y"   
               "$b.$$"     

        
        ------------
        Server Started!
        Express: http://localhost:${port}
        Swagger Docs: http://localhost:${port}/docs
        Swagger Spec: http://localhost:${port}/api-docs
        ------------
      `);
    });
  }

}
