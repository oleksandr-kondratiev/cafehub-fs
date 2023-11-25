import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  status: string;
}
