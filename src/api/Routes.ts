import { Application, Request, Response } from 'express';
import Container, { Service } from 'typedi';

import AppSettingService from './services/AppSettingService';

function health(app: Application) {
  /**
   * @openapi
   * /_health:
   *  get:
   *      summary: Health check
   *      tags:
   *        - Health
   *      description: Responds if the app is up and running
   *      responses:
   *        200:
   *          description: App is up and running
   */
  app.get('/_health', (_req: Request, res: Response) => res.sendStatus(200));
}

function appSetting(app: Application, appSettingService: AppSettingService) {
  /**
   * @openapi
   * components:
   *   schemas:
   *     AppSetting:
   *       type: object
   *       required:
   *         - key
   *         - value
   *       properties:
   *         key:
   *           type: string
   *           description: The Key
   *         value:
   *           type: string
   *           description: The Value
   *       example:
   *         key: applicationLabel
   *         value: MyApp
   */

  /**
   * @openapi
   * /appsettings:
   *  get:
   *      summary: Get all App Settings
   *      tags:
   *        - App Settings
   *      responses:
   *        200:
   *          description: Get all App Settings
   */
  app.get('/appsettings', async (_req, res) => {
    const settings = await appSettingService.getAppSettings();
    res.send(settings);
  });

  /**
   * @openapi
   * /appsettings/{key}:
   *  get:
   *      summary: Get specific App Setting
   *      tags:
   *        - App Settings
   *      parameters:
   *        - name: key
   *          in: path
   *          description: Key of App Setting
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Get specific App Setting
   *        404:
   *          description: App Setting requested was not found
   */
  app.get('/appsettings/:key', async (req, res) => {
    const setting = await appSettingService.getAppSetting(req.params.key);
    if (setting) {
      res.send(setting);
    } else {
      res.sendStatus(404);
    }
  });

  /**
   * @openapi
   * /appsettings/{key}:
   *  put:
   *      summary: Update specific App Setting
   *      tags:
   *        - App Settings
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/AppSetting'
   *      responses:
   *        200:
   *          description: Successfully updated specific App Setting
   *        404:
   *          description: App Setting requested was not found
   */
  app.put('/appsettings/:key', async (req, res) => {
    const setting = await appSettingService.updateAppSetting(
      req.body.key,
      req.body.value
    );
    if (setting) {
      res.send(setting);
    } else {
      res.sendStatus(404);
    }
  });
}

@Service()
export default class Routes {
  appSettingService = Container.get(AppSettingService);

  addRoutes(app: Application) {
    health(app);
    appSetting(app, this.appSettingService);
  }
}
