import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  phone_number: string;
}

export class UpdateUserPasswordDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  previousPassword: string;
  @ApiProperty()
  newPassword: string;
}
