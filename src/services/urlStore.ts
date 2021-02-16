import { Collection, Db } from 'mongodb';
import ShortUrl from '../types/ShortUrl';

const generateToken = (length = 8): string => {
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array(length)
    .fill(1)
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('');
};

const ensureCollection = async (db: Db): Promise<Collection> => {
  if (!db.collection('urls')) await db.createCollection('urls');

  return db.collection('urls');
};

export default {
  create: async (db: Db, url: string): Promise<ShortUrl> => {
    if (!url) throw new Error('No url specified');

    const collection = await ensureCollection(db);
    await collection.createIndex('token');
    let iteration = 0;
    let token = generateToken();

    const existing = await collection.findOne({ url });
    if (existing) return { token: existing.token, url: existing.url };

    while (await collection.findOne({ token })) {
      iteration++;

      token = generateToken();

      if (iteration > 10) throw new Error('Too many retries');
    }

    await collection.insertMany([{ token, url }]);

    return collection.findOne({ token });
  },
  getAll: async (db: Db): Promise<ShortUrl[]> => {
    const collection = await ensureCollection(db);

    return (await collection.find().toArray()).map((saved) => ({
      token: saved.token,
      url: saved.url,
    }));
  },
  get: async (db: Db, token: string): Promise<ShortUrl> => {
    const collection = await ensureCollection(db);

    const saved = await collection.findOne({ token });
    if (!saved) throw new Error('Not found');

    return { token: saved.token, url: saved.url };
  },
};
