import { Test, TestingModule } from '@nestjs/testing';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

describe('CardsController', () => {
  let controller: CardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [CardsService],
    }).compile();

    controller = module.get<CardsController>(CardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // @Post()
  // create(@Body() createCardDto: CreateCardDto) {
  //   return this.cardsService.create(createCardDto);
  // }
  //
  //
  it('should create a card', () => {
    const card = {
      name: 'test card',
      description: 'test description',
      imageUrl: 'test image url',
      price: 100,
    };
    expect(controller.create(card)).toEqual({
      id: 1,
      ...card,
    });
  }



});
