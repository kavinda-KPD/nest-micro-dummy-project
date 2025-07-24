import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceService {
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
}
