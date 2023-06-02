import { Application } from 'express';

import { handleApiError } from '../apiUtils';
import UserService from '../services/user.service';

export default function userRoute(app: Application, service: UserService) {
  /**
   * @openapi
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       required:
   *         - FirstName
   *         - LastName
   *       properties:
   *         FirstName:
   *           type: string
   *           description: The First Name
   *         LastName:
   *           type: string
   *           description: The Last Name
   *         Email:
   *           type: string
   *           description: The Email
   *         Phone:
   *           type: string
   *           description: The Phone
   *         IdExternal:
   *           type: string
   *           description: The External Id
   *       example:
   *          FirstName: "John"
   *          LastName: "Doe"
   *          Email: "JohnDoe@emailaddress.emaildotcom"
   *          Phone: "780587456"
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
    try {
      const users = await service.getAll();
      res.send(users);
    } catch (error) {
      handleApiError(error as Error, res);
    }
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
    try {
      const user = await service.get(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      handleApiError(error as Error, res);
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
    try {
      const user = await service.create(req.body);
      if (user) {
        res.send(user);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
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
    try {
      const user = await service.update(req.body);
      if (user) {
        res.send(user);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
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
    try {
      const user = await service.patch(req.body);
      if (user) {
        res.send(user);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
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
    try {
      const userFoundAndDeleted = await service.delete(req.params.id);
      if (userFoundAndDeleted) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });
}
