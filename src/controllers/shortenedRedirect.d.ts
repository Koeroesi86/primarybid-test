import express from 'express';
import { Db } from 'mongodb';
declare const shortenedRedirect: (db: Db) => (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
export default shortenedRedirect;
