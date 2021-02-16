import express from 'express';
import { Db } from 'mongodb';
declare const getLinks: (db: Db) => (req: express.Request, res: express.Response) => Promise<void>;
export default getLinks;
