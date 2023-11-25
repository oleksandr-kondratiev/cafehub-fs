import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  category?: string;
  @ApiProperty()
  subcategory?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  weight?: number;
  @ApiProperty()
  productImage?: string;
  @ApiProperty()
  ingredients?: string[];
}
