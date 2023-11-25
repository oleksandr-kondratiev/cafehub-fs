import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  phone_number?: string;
  @ApiProperty()
  image?: string;
  @ApiProperty()
  role: string;
}
