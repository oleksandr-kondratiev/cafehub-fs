import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { AddressEntity } from './entities/address.entity';
import { AddressDto } from './dto/address.dto';

import JwtAuthenticationGuard from 'src/auth/auth.guard';
import { User } from 'src/users/user.decorator';
import { AddressesService } from './addresses.service';

import { ROUTES } from '../constants/routes';
import { ERRORS } from 'src/constants/errors';

@Controller(ROUTES.addresses)
export class AddressesController {
  constructor(private readonly AddressesService: AddressesService) {}

  @Get(ROUTES.getAll)
  @ApiOperation({ summary: ROUTES.getAll })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getAll,
    type: AddressEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.address_error,
  })
  @HttpCode(HttpStatus.OK)
  findAllAddresses(@User('id') id: string): Promise<AddressEntity[]> {
    return this.AddressesService.findAllUsersAddresses(id);
  }

  @Post(ROUTES.create)
  @ApiOperation({ summary: ROUTES.create })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: ROUTES.create,
    type: AddressEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.address_error,
  })
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(new JwtAuthenticationGuard())
  createAndUpdateUserAddresses(
    @Body() createAddressDto: AddressDto[],
    @User('id') id: string,
  ): Promise<AddressEntity[]> {
    return this.AddressesService.createAndUpdateUserAddresses(
      createAddressDto,
      id,
    );
  }
}
