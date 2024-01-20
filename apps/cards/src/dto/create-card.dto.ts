import { ApiProperty } from '@nestjs/swagger';
export class CreateCardDto {
  @ApiProperty({ required: false, example: 'Bulbasaur' })
  name: string;
}
