import { MongoClient, Db } from 'mongodb';
import * as config from 'config';
import { Service } from 'typedi';

@Service()
export class Mongo {

  private _db: Db;
  private url: string = config.get('mongo.url').toString();

  async db() {
    if(!this.db) {
      this._db = await MongoClient.connect(this.url);
    }
    return this._db;
  }

  async health() {
    // something like this:
    // https://github.com/dannydavidson/k8s-neo-api/blob/master/annotely-graph/apps/ops/health.js
    return true;
  }

}
