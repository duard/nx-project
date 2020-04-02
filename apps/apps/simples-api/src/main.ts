/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
import * as expressListRoutes from 'express-list-routes';

import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://0.0.0.0:' + port + '/' + globalPrefix);
  });
  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(expressListRoutes({}, 'API:', router));
}

bootstrap();
