import { MongoClient, Db } from 'mongodb';
import * as config from 'config';
import { Service } from 'typedi';

@Service()
export class Mongo {

  url: string = config.get('mongo.url').toString();
  
  private db: Db;

  async getDb() {
    if(!this.db) {
      this.db = await MongoClient.connect(this.url);
    }
    return this.db;
  }

}
