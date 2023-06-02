import { Application } from 'express';

import { handleApiError } from '../apiUtils';
import AppSettingService from '../services/app-setting.service';

export default function appSettingRoute(
  app: Application,
  service: AppSettingService
) {
  /**
   * @openapi
   * components:
   *   schemas:
   *     AppSetting:
   *       type: object
   *       required:
   *         - Key
   *         - Value
   *       properties:
   *         Key:
   *           type: string
   *           description: The Key
   *         Value:
   *           type: string
   *           description: The Value
   *       example:
   *         Key: "k2"
   *         Value: "MyApp"
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
    try {
      const settings = await service.getAll();
      res.send(settings);
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /appsettings/{key}:
   *  get:
   *      summary: Get App Setting
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
   *          description: Get App Setting
   *        404:
   *          description: App Setting requested was not found
   */
  app.get('/appsettings/:key', async (req, res) => {
    try {
      const setting = await service.get(req.params.key);
      if (setting) {
        res.send(setting);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /appsettings:
   *  put:
   *      summary: Update App Setting
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
   *          description: Successfully updated App Setting
   *        404:
   *          description: App Setting requested was not found
   */
  app.put('/appsettings', async (req, res) => {
    try {
      const setting = await service.update(req.body);
      if (setting) {
        res.send(setting);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });
}
