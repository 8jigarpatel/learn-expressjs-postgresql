import 'reflect-metadata';
import { log } from 'console';

import express, { Application } from 'express';
import Container from 'typedi';

import Routes from './api/routes/routes';
import swaggerDoc from './utils/swagger';
import { port } from './config';
import { initDataSource } from './data/data-source';
import initLogging from './utils/logger';

const app: Application = express();
initLogging(app);
initDataSource();
app.use(express.json());

app.listen(port, () => {
  const routes = Container.get(Routes);
  routes.addRoutes(app);
  swaggerDoc(app);
  log(`Server is listening on port ${port}!`);
});
