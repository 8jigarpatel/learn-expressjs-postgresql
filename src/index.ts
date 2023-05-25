/* eslint-disable no-console */
import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import dataSource from './data/data-source';

dataSource
  .initialize()
  .then(() => {
    console.log('data source then');
  })
  .catch((error) => {
    console.error(error);
  });

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello World!' });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
