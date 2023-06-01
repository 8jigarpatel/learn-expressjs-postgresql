/* eslint-disable no-restricted-syntax */
import 'reflect-metadata';
import express, { Application } from 'express';
import { log } from 'console';
import * as path from 'path';

import Container from 'typedi';
import morgan from 'morgan';
import * as rfs from 'rotating-file-stream';

import Routes from './api/Routes';
import swaggerDoc from './utils/swagger';
import { port, loggingConfig } from './config';
import { initDataSource } from './data/data-source';

const app: Application = express();

// JP > TODO: move logging to separate module
if (loggingConfig.enable) {
  const loggingFormat = loggingConfig.format || 'combined';
  log(
    `Logging enabled [format: '${loggingFormat}'] [location: '${
      loggingConfig.fileName ? `${loggingConfig.fileName}.log` : 'console'
    }'].`
  );

  if (loggingConfig.fileName) {
    const accessLogStream = rfs.createStream(`${loggingConfig.fileName}.log`, {
      interval: `${loggingConfig.fileRotationDays}d`,
      path: path.join(__dirname, 'logs'),
    });
    app.use(morgan(loggingFormat, { stream: accessLogStream }));
  } else {
    app.use(morgan(loggingFormat));
  }
}

initDataSource();
app.use(express.json());

app.listen(port, () => {
  const routes = Container.get(Routes);
  routes.addRoutes(app);
  swaggerDoc(app);
  log(`Server is listening on port ${port}!`);
});
