import { NestFactory } from '@nestjs/core';
import { CardsModule } from './cards.module';

async function bootstrap() {
  const app = await NestFactory.create(CardsModule);
  await app.listen(3000);
}
bootstrap();
