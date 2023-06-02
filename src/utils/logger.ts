import { log } from 'console';
import * as path from 'path';

import { Application } from 'express';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';

import { loggingConfig } from '../config';

export default function initLogging(app: Application) {
  if (loggingConfig.enable) {
    const loggingFormat = loggingConfig.format || 'combined';
    log(
      `Logging enabled [format: '${loggingFormat}'] [location: '${
        loggingConfig.fileName ? `${loggingConfig.fileName}.log` : 'console'
      }'].`
    );

    if (loggingConfig.fileName) {
      const accessLogStream = createStream(`${loggingConfig.fileName}.log`, {
        interval: `${loggingConfig.fileRotationDays}d`,
        path: path.join(__dirname, 'logs'),
      });
      app.use(morgan(loggingFormat, { stream: accessLogStream }));
    } else {
      app.use(morgan(loggingFormat));
    }
  }
}
