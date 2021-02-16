import express from 'express';
import { Db } from 'mongodb';
import urlStore from '../services/urlStore';
import ShortUrlResponse from '../types/ShortUrlResponse';

const createLink = (db: Db) => async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const saved = await urlStore.create(db, req.body.url);
    res.status(200);
    res.json({
      url: `${process.env.BASE_URL}/${saved.token}`,
      original: saved.url,
    } as ShortUrlResponse);
  } catch (e) {
    console.error('error', e);
    res.status(400);
    res.json({});
  }
};

export default createLink;
