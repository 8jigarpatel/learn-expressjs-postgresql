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
const port = process.env.PORT || 5000;

app.use(express.json());

// setup routes
app.use('/_health', (_req, res) => {
  res.status(200).send({ data: 'Hello World!' });
});
const appSettingController = Container.get(AppSettingController);
app.use('/appsettings', appSettingController.routes());

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
