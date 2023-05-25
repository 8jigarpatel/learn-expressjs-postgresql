import express from 'express';
import Container, { Service } from 'typedi';

import AppSettingService from '../services/AppSettingService';

@Service()
export default class AppSettingController {
  appSettingService = Container.get(AppSettingService);

  routes() {
    const appSettingRouter = express.Router();
    appSettingRouter.get('/', async (_req, res) => {
      const settings = await this.appSettingService.getAppSettings();
      res.send(settings);
    });

    appSettingRouter
      .route('/:key')
      .get(async (req, res) => {
        const setting = await this.appSettingService.getAppSetting(
          req.params.key
        );
        if (setting) {
          res.send(setting);
        } else {
          res.sendStatus(404);
        }
      })
      .put((req, res) => {
        res.send(
          this.appSettingService.updateAppSetting(
            req.params.key,
            req.body.value
          )
        );
      });

    return appSettingRouter;
  }
}
