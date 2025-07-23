import { NestFactory } from '@nestjs/core';
import { GameServiceModule } from './game-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GameServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'game_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
