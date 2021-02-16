import express from 'express';
import { Db } from 'mongodb';
declare const getLink: (db: Db) => (req: express.Request, res: express.Response) => Promise<void>;
export default getLink;
