import { Application } from 'express';

import { handleApiError } from '../apiUtils';
import CustomerService from '../services/customer.service';

export default function customerRoute(
  app: Application,
  service: CustomerService
) {
  /**
   * @openapi
   * components:
   *   schemas:
   *     Customer:
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
   *          FirstName: "Citizen"
   *          LastName: "Man"
   *          Email: "citizen@emailman.emaildotcom"
   *          Phone: "684583219"
   *          IdExternal:
   */

  /**
   * @openapi
   * /customers:
   *  get:
   *      summary: Get all Customers
   *      tags:
   *        - Customers
   *      responses:
   *        200:
   *          description: Get all Customers
   */
  app.get('/customers', async (_req, res) => {
    try {
      const customers = await service.getAll();
      res.send(customers);
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /customers/{id}:
   *  get:
   *      summary: Get Customer
   *      tags:
   *        - Customers
   *      parameters:
   *        - name: id
   *          in: path
   *          description: Id of customer
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Get Customer
   *        404:
   *          description: Customer could not be found
   */
  app.get('/customers/:id', async (req, res) => {
    try {
      const customer = await service.get(req.params.id);
      if (customer) {
        res.send(customer);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /customers:
   *  post:
   *      summary: Create Customer
   *      tags:
   *        - Customers
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Customer'
   *      responses:
   *        200:
   *          description: Customer created
   *        400:
   *          description: Customer could not be created
   */
  app.post('/customers', async (req, res) => {
    try {
      const customer = await service.create(req.body);
      if (customer) {
        res.send(customer);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /customers:
   *  put:
   *      summary: Update Customer
   *      tags:
   *        - Customers
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Customer'
   *      responses:
   *        200:
   *          description: Customer updated
   *        404:
   *          description: Customer could not be updated
   */
  app.put('/customers', async (req, res) => {
    try {
      const customer = await service.update(req.body);
      if (customer) {
        res.send(customer);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /customers:
   *  patch:
   *      summary: Patch Customer
   *      tags:
   *        - Customers
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Customer'
   *      responses:
   *        200:
   *          description: Customer patched
   *        400:
   *          description: Customer could not be patched
   */
  app.patch('/customers', async (req, res) => {
    try {
      const customer = await service.patch(req.body);
      if (customer) {
        res.send(customer);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /customers/{id}:
   *  delete:
   *      summary: Delete Customer
   *      tags:
   *        - Customers
   *      parameters:
   *        - name: id
   *          in: path
   *          description: Id of customer
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Deleted Customer
   *        400:
   *          description: Customer could not be deleted
   */
  app.delete('/customers/:id', async (req, res) => {
    try {
      const customerFoundAndDeleted = await service.deleteCustomer(
        req.params.id
      );
      if (customerFoundAndDeleted) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });
}
