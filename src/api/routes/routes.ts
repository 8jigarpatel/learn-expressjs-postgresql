import { Application, Request, Response } from 'express';
import Container, { Service } from 'typedi';

import AppSettingService from '../services/app-setting.service';
import CustomerService from '../services/customer.service';
import ProductTypeService from '../services/product-type.service';
import UserService from '../services/user.service';

import appSettingRoute from './app-setting.route';
import customerRoute from './customer.route';
import productTypeRoute from './product-type.route';
import userRoute from './user.route';

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

@Service()
export default class Routes {
  appSettingService = Container.get(AppSettingService);

  customerService = Container.get(CustomerService);

  userService = Container.get(UserService);

  productTypeService = Container.get(ProductTypeService);

  addRoutes(app: Application) {
    healthRoutes(app);
    appSettingRoute(app, this.appSettingService);
    userRoute(app, this.userService);
    customerRoute(app, this.customerService);
    productTypeRoute(app, this.productTypeService);
  }
}
