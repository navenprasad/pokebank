import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CardsService } from 'apps/cards/src/cards.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cardsService: CardsService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
