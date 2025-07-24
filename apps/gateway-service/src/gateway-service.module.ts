import { Module } from '@nestjs/common';
import { GatewayServiceController } from './gateway-service.controller';
import { GatewayServiceService } from './gateway-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GAME_SERVICE, USER_SERVICE } from '../constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: GAME_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'game_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
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
  controllers: [GatewayServiceController],
  providers: [GatewayServiceService],
})
export class GatewayServiceModule {}
