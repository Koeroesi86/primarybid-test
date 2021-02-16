import express from 'express';
import urlStore from '../services/urlStore';
import { Db } from 'mongodb';

const shortenedRedirect = (db: Db) => async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const saved = await urlStore.get(db, req.params.id);
    res.status(302);
    res.header('location', saved.url);
    res.end();
  } catch (e) {
    next(e);
  }
};

export default shortenedRedirect;
