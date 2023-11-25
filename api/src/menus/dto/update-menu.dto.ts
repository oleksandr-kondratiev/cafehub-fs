import { ApiProperty } from '@nestjs/swagger';

export class UpdateMenuDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  products?: string[];
}
