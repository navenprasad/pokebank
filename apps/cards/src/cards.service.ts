import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCardDto: CreateCardDto) {
    return this.prisma.card.create({ data: createCardDto });
  }

  findAll() {
    return this.prisma.card.findMany();
  }

  findOne(id: number) {
    return this.prisma.card.findUnique({ where: { id } });
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
