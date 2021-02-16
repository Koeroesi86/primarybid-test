import express from 'express';
import { Db } from 'mongodb';
declare const createLink: (db: Db) => (req: express.Request, res: express.Response) => Promise<void>;
export default createLink;
