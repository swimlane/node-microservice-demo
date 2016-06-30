import * as express from 'express';
import * as bodyParser from 'body-parser';

export class ExpressConfig {

	server: express.Express;

	constructor() {
		this.server = express();
		this.server.use(bodyParser.json());
		this.server.use(bodyParser.urlencoded({ extended: false }));
	}

}
