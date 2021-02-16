import { Db } from 'mongodb';
declare const createDatabase: () => Promise<Db>;
export default createDatabase;
