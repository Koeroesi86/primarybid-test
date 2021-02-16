import { Db } from 'mongodb';
import ShortUrl from '../types/ShortUrl';
declare const _default: {
    create: (db: Db, url: string) => Promise<ShortUrl>;
    getAll: (db: Db) => Promise<ShortUrl[]>;
    get: (db: Db, token: string) => Promise<ShortUrl>;
};
export default _default;
