import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  RABBITMQ_DEFAULT_PASS,
  RABBITMQ_DEFAULT_USER,
  RABBITMQ_HOST,
  RABBITMQ_PORT,
  RABBITMQ_QUEUE,
} from '../conf/conf';

import { AppModule } from './app.module';

async function bootstrap() {
  console.log('rabbituser', RABBITMQ_DEFAULT_USER);
  console.log('rabbitpass', RABBITMQ_DEFAULT_PASS);
  console.log('rabbithost', RABBITMQ_HOST);
  console.log('rabbitport', RABBITMQ_PORT, typeof RABBITMQ_PORT);
  console.log('rabbitqueue', RABBITMQ_QUEUE);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`,
        ],
        queue: RABBITMQ_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
