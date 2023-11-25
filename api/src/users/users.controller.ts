import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  Delete,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import JwtAuthenticationGuard from '../auth/auth.guard';
import { UsersService } from './users.service';

import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserPasswordDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';

import { ROUTES } from '../constants/routes';
import { ERRORS } from 'src/constants/errors';

@Controller(ROUTES.users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(ROUTES.create)
  @ApiOperation({ summary: ROUTES.create })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: ROUTES.create,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ERRORS.user_create_error,
  })
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(ROUTES.update)
  @ApiOperation({ summary: ROUTES.update })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.update,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.user_update_error,
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(new JwtAuthenticationGuard())
  updateUser(@Body() UpdateUser: UpdateUserDto): Promise<UserDto> {
    return this.usersService.updateUser(UpdateUser.id, UpdateUser);
  }

  @Patch(ROUTES.userPasswordUpdate)
  @ApiOperation({ summary: ROUTES.update })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.update,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.user_update_error,
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(new JwtAuthenticationGuard())
  updateUserPassword(
    @Body() UpdateUserPassword: UpdateUserPasswordDto,
  ): Promise<UserDto> {
    return this.usersService.updateUserPassword(
      UpdateUserPassword.id,
      UpdateUserPassword,
    );
  }

  @Delete(ROUTES.delete)
  @ApiOperation({ summary: ROUTES.delete })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.delete,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.user_delete_error,
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(new JwtAuthenticationGuard())
  removeUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.usersService.removeUser(id);
  }
}
