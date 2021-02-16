import express from 'express';
import { Db } from 'mongodb';
import urlStore from '../services/urlStore';
import ShortUrlResponse from '../types/ShortUrlResponse';

const getLinks = (db: Db) => async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const saved = await urlStore.getAll(db);
    res.status(200);
    res.json(
      saved.map((short) => ({
        url: `${process.env.BASE_URL}/${short.token}`,
        original: short.url,
      })) as ShortUrlResponse[]
    );
  } catch (e) {
    res.status(400);
    res.json({});
  }
};

export default getLinks;
