import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE } from 'apps/gateway-service/constant';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GameServiceService {
  constructor(
    @Inject(USER_SERVICE) private readonly _userService: ClientProxy,
  ) {}
  createGame(data: any): any {
    // Simulate a DB call with a 2-second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data, message: 'Simulated DB call complete' });
      }, 2000);
    });
  }

  async getPaidGames(): Promise<any> {
    // some tasks in the method

    return await firstValueFrom(
      this._userService.send('userController.get-paid-games', {}),
    );
  }

  async paymentHistory(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [],
          message:
            'Simulated DB call complete payment history from game service',
        });
      }, 2000);
    });
  }
}
