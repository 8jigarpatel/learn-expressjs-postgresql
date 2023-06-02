import { Application } from 'express';

import { handleApiError } from '../apiUtils';
import ProductTypeService from '../services/product-type.service';

export default function productTypeRoute(
  app: Application,
  service: ProductTypeService
) {
  /**
   * @openapi
   * components:
   *   schemas:
   *     ProductType:
   *       type: object
   *       required:
   *         - CreatedById
   *         - Name
   *         - Cost
   *       properties:
   *         CreatedById:
   *           type: string
   *           description: CreatedById of User
   *         Name:
   *           type: string
   *           description: The Name
   *         Cost:
   *           type: money
   *           description: The Cost
   *       example:
   *          CreatedById: "81560572-b30c-46e9-a3c0-434743172069"
   *          Name: "Printer Epson 220"
   *          Cost: 90.99
   */

  /**
   * @openapi
   * /producttypes:
   *  get:
   *      summary: Get all Product Types
   *      tags:
   *        - Product Types
   *      responses:
   *        200:
   *          description: Get all Product Types
   */
  app.get('/producttypes', async (_req, res) => {
    try {
      const productTypes = await service.getAll();
      res.send(productTypes);
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /producttypes/{id}:
   *  get:
   *      summary: Get Product Type
   *      tags:
   *        - Product Types
   *      parameters:
   *        - name: id
   *          in: path
   *          description: Id of Product Type
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Get Product Type
   *        404:
   *          description: Product Type could not be found
   */
  app.get('/producttypes/:id', async (req, res) => {
    try {
      const productType = await service.get(req.params.id);
      if (productType) {
        res.send(productType);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });

  /**
   * @openapi
   * /producttypes:
   *  post:
   *      summary: Create Product Type
   *      tags:
   *        - Product Types
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ProductType'
   *      responses:
   *        200:
   *          description: Product Type created
   *        400:
   *          description: Product Type could not be created
   */
  app.post('/producttypes', async (req, res) => {
    try {
      const productType = await service.create(req.body);
      if (productType) {
        res.send(productType);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      handleApiError(error as Error, res);
    }
  });
}
