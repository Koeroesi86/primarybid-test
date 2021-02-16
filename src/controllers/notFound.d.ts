import express from 'express';
declare const notFound: (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => void;
export default notFound;
