import { Service, Inject } from 'typedi';
import { Mongo } from '../config/Mongo';

@Service()
export abstract class MongoService {

  @Inject()
  mongodb: Mongo;

  abstract collectionName: string;

  async collection(name?: string) {
    let db = await this.mongodb.db();
    return db.collection(name || this.collectionName);
  }

  async insertOne(document: any) {
    let col = await this.collection();
    return col.insertOne(document);
  }

  async insertMany(documents: any[]) {
    let col = await this.collection();
    return col.insertMany(documents);
  }

}
