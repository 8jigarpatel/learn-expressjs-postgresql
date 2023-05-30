/* eslint-disable no-console */
import 'reflect-metadata';
import express, { Application } from 'express';
import Container from 'typedi';

import swaggerDoc from './utils/swagger';
import dataSource from './data/data-source';
import Routes from './api/Routes';

dataSource
  .initialize()
  .then(() => {
    console.log('data source initialized');
  })
  .catch((error) => {
    console.error(error);
  });

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// const appSettingController = Container.get(AppSettingController);
// app.use('/appsettings', appSettingController.routes());

app.listen(port, () => {
  const routes = Container.get(Routes);
  routes.addRoutes(app);
  swaggerDoc(app);
  console.log(`Server is listening on port ${port}!`);
});
