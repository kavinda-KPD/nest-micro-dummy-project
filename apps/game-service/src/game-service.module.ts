import { Module } from '@nestjs/common';
import { GameServiceController } from './game-service.controller';
import { GameServiceService } from './game-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE } from 'apps/gateway-service/constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'user_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [GameServiceController],
  providers: [GameServiceService],
})
export class GameServiceModule {}
