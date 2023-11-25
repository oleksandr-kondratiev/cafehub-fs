import { ApiProperty } from '@nestjs/swagger';

export class MenuDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  products: string[];
}
