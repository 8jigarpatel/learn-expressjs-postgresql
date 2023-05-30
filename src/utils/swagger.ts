import { Application, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc'; // https://github.com/Surnet/swagger-jsdoc
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';

const options: swaggerJsdoc.Options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version,
    },
  },
  apis: ['./src/api/routes.{ts,js}', './src/api/schema/*.{ts,js}'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Application) {
  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
