import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  RABBITMQ_DEFAULT_PASS,
  RABBITMQ_DEFAULT_USER,
  RABBITMQ_HOST,
  RABBITMQ_PORT,
  RABBITMQ_QUEUE_SERVICE_A,
  RABBITMQ_QUEUE_SERVICE_B,
} from '../config/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_A',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`,
          ],
          queue: RABBITMQ_QUEUE_SERVICE_A,
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'SERVICE_B',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`,
          ],
          queue: RABBITMQ_QUEUE_SERVICE_B,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
