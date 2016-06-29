import * as express from 'express';
import * as bodyParser from 'body-parser';

export class ExpressConfig {

	app: express.Express;

	constructor() {
		this.app = express();
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
	
}