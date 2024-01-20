import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
  getCards(): string {
    return 'Cards!';
  }
}
