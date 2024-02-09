import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaClient } from '@prisma/client';
@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [PrismaModule],
})
export class CardsModule { }
