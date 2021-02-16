import express from 'express';

const notFound = (
  err,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (err) {
    console.error(err);
    res.status(301);
    res.header('location', '/');
    res.end();
  } else {
    next();
  }
};

export default notFound;
