import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from 'apps/cards/src/cards.module';
import { CardsController } from 'apps/cards/src/cards.controller';
import { CardsService } from 'apps/cards/src/cards.service';

@Module({
  imports: [CardsModule], // Include CardsModule in the imports array
  controllers: [AppController, CardsController],
  providers: [AppService, CardsService],
})
export class AppModule {}
