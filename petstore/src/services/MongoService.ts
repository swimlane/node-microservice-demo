import { MongoClient } from 'mongodb';
import * as config from 'config';
import { Service } from 'typedi';

@Service()
export class MongoService {

  constructor() {
    const url = config.get('mongo.url').toString();
    MongoClient.connect(url, (err, db) => {
      console.log("Connected correctly to server");
      db.close();
    });
  }

}
