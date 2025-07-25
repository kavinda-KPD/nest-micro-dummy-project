import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { GatewayServiceService } from './gateway-service.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { GAME_SERVICE, USER_SERVICE } from '../constant';

@Controller('api')
export class GatewayServiceController {
  constructor(
    private readonly gatewayServiceService: GatewayServiceService,

    @Inject(GAME_SERVICE) private readonly _gameService: ClientProxy,

    @Inject(USER_SERVICE) private readonly _userService: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.gatewayServiceService.getHello();
  }

  @Post('/game')
  async createGame(@Body() body: any) {
    return await firstValueFrom(this._gameService.send('create-game', body));
  }

  @Get('/paid-game')
  async getPaidGames() {
    return await firstValueFrom(this._gameService.send('get-paid-games', {}));
  }

  @Get('/payment-history')
  async getPaidGames2() {
    return await firstValueFrom(
      this._userService.send('userController.payment-history', {}),
    );
  }
}
