import { Db, MongoClient } from 'mongodb';

let client: MongoClient;

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const createDatabase = async (): Promise<Db> => {
  if (!client) {
    client = new MongoClient(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&writeConcern=majority`
    );
    await client.connect();

    process.addListener('beforeExit', () => {
      if (client) {
        client.close();
      }
    });
  }

  return client.db(DB_NAME);
};

export default createDatabase;
