import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GAME_SERVICE } from 'apps/gateway-service/constant';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserServiceService {
  constructor(
    @Inject(GAME_SERVICE) private readonly _gameService: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getPaidGames(): any {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            {
              id: 1,
              name: 'Game 1',
              price: 100,
            },
          ],
          message: 'Simulated DB call complete',
        });
      }, 2000);
    });
  }

  async paymentHistory(): Promise<any> {
    return await firstValueFrom(
      this._gameService.send('gameController.payment-history', {}),
    );
  }
}
