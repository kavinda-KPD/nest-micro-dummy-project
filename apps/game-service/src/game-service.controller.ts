import { Controller, Get } from '@nestjs/common';
import { GameServiceService } from './game-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class GameServiceController {
  constructor(private readonly gameServiceService: GameServiceService) {}

  @MessagePattern('create-game')
  async createGame(@Payload() body: any) {
    return await this.gameServiceService.createGame(body);
  }

  @MessagePattern('get-paid-games')
  async getPaidGames() {
    return await this.gameServiceService.getPaidGames();
  }

  @MessagePattern('gameController.payment-history')
  async paymentHistory() {
    return await this.gameServiceService.paymentHistory();
  }
}
