import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  isActive: boolean;
}
