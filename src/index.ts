/* eslint-disable no-console */
import 'reflect-metadata';
import express, { Application } from 'express';
import Container from 'typedi';

import dataSource from './data/data-source';
import AppSettingController from './api/controllers/AppSettingController';

dataSource
  .initialize()
  .then(() => {
    console.log('data source initialized');
  })
  .catch((error) => {
    console.error(error);
  });

const app: Application = express();
const port = 5000;

// setup routes
const appSettingController = Container.get(AppSettingController);

app.use('/healthcheck', (_req, res) => {
  res.status(200).send({ data: 'Hello World!' });
});
app.use('/appsettings', appSettingController.routes());

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
