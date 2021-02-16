import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import createLink from './controllers/createLink';
import getLinks from './controllers/getLinks';
import getLink from './controllers/getLink';
import createDatabase from './config/createDatabase';
import shortenedRedirect from './controllers/shortenedRedirect';
import notFound from './controllers/notFound';

const app = express();

const { PORT } = process.env;

(async () => {
  const db = await createDatabase();

  app
    .post('/api/', bodyParser.json(), createLink(db))
    .get('/api/', getLinks(db))
    .get('/api/:id', getLink(db))
    .get('/:id([a-z0-9]{8})', shortenedRedirect(db))
    .get('/*', express.static(path.resolve(process.cwd(), 'dist/static/')))
    .use(notFound);

  await new Promise<void>((res) => app.listen(parseInt(PORT, 10), res));

  console.log(`Server listening on http://localhost:${PORT}`);
})();
