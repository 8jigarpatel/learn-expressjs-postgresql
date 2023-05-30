import { Application, Request, Response } from 'express';
import Container, { Service } from 'typedi';

import AppSettingService from './services/AppSettingService';
import UserService from './services/UserService';

function healthRoutes(app: Application) {
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

function appSettingRoutes(
  app: Application,
  appSettingService: AppSettingService
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
   *         Key: k2
   *         Value: MyApp
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
    const setting = await appSettingService.getAppSetting(req.params.key);
    if (setting) {
      res.send(setting);
    } else {
      res.sendStatus(404);
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
    const setting = await appSettingService.updateAppSetting(req.body);
    if (setting) {
      res.send(setting);
    } else {
      res.sendStatus(404);
    }
  });
}

function userRoutes(app: Application, userService: UserService) {
  /**
   * @openapi
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       required:
   *         - FirstName
   *         - LastName
   *         - Email
   *       properties:
   *         Id:
   *           type: string
   *           description: Id
   *         FirstName:
   *           type: string
   *           description: The First Name
   *         LastName:
   *           type: string
   *           description: The Last Name
   *         Email:
   *           type: string
   *           description: The Email
   *         IdExternal:
   *           type: string
   *           description: The External Id
   *       example:
   *          Id: "0"
   *          FirstName: John
   *          LastName: Doe
   *          Email: JohnDoe@emailaddress.emaildotcom
   *          IdExternal:
   */

  /**
   * @openapi
   * /users:
   *  get:
   *      summary: Get all Users
   *      tags:
   *        - Users
   *      responses:
   *        200:
   *          description: Get all Users
   */
  app.get('/users', async (_req, res) => {
    const users = await userService.getUsers();
    res.send(users);
  });

  /**
   * @openapi
   * /users/{id}:
   *  get:
   *      summary: Get User
   *      tags:
   *        - Users
   *      parameters:
   *        - name: id
   *          in: path
   *          description: Id of user
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Get User
   *        404:
   *          description: User could not be found
   */
  app.get('/users/:id', async (req, res) => {
    const user = await userService.getUser(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(404);
    }
  });

  /**
   * @openapi
   * /users:
   *  post:
   *      summary: Create User
   *      tags:
   *        - Users
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      responses:
   *        200:
   *          description: User created
   *        400:
   *          description: User could not be created
   */
  app.post('/users', async (req, res) => {
    const user = await userService.createUser(req.body);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(400);
    }
  });

  /**
   * @openapi
   * /users:
   *  put:
   *      summary: Update User
   *      tags:
   *        - Users
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      responses:
   *        200:
   *          description: User updated
   *        404:
   *          description: User could not be updated
   */
  app.put('/users', async (req, res) => {
    const user = await userService.updateUser(req.body);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(400);
    }
  });

  /**
   * @openapi
   * /users:
   *  patch:
   *      summary: Patch User
   *      tags:
   *        - Users
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      responses:
   *        200:
   *          description: User patched
   *        400:
   *          description: User could not be patched
   */
  app.patch('/users', async (req, res) => {
    const user = await userService.patchUser(req.body);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(400);
    }
  });

  /**
   * @openapi
   * /users/{id}:
   *  delete:
   *      summary: Delete User
   *      tags:
   *        - Users
   *      parameters:
   *        - name: id
   *          in: path
   *          description: Id of user
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Deleted User
   *        400:
   *          description: User could not be deleted
   */
  app.delete('/users/:id', async (req, res) => {
    const userFoundAndDeleted = await userService.deleteUser(req.params.id);
    if (userFoundAndDeleted) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
}

@Service()
export default class Routes {
  appSettingService = Container.get(AppSettingService);

  userService = Container.get(UserService);

  addRoutes(app: Application) {
    healthRoutes(app);
    appSettingRoutes(app, this.appSettingService);
    userRoutes(app, this.userService);
  }
}
