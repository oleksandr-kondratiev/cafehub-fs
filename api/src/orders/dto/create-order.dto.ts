import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  price: number;
  @ApiProperty()
  date: Date;
  @ApiProperty()
  deliveryDate: Date;
  @ApiProperty()
  status: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  user: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  products: string[];
  @ApiProperty()
  menus: string[];
}
