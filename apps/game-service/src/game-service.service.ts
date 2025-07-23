import { Injectable } from '@nestjs/common';

@Injectable()
export class GameServiceService {
  createGame(data: any): any {
    // Simulate a DB call with a 2-second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data, message: 'Simulated DB call complete' });
      }, 2000);
    });
  }
}
