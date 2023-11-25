import {
  Controller,
  Body,
  Post,
  HttpException,
  HttpStatus,
  Get,
  Req,
  UseGuards,
  HttpCode,
} from '@nestjs/common';

import JwtAuthenticationGuard from './auth.guard';

import { AuthService } from './auth.service';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

import { ROUTES } from '../constants/routes';

@Controller(ROUTES.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(ROUTES.authRegister)
  public async registerUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.registerUser(
      createUserDto,
    );

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post(ROUTES.authLogin)
  public async loginUser(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<LoginStatus> {
    return await this.authService.loginUser(loginUserDto);
  }

  @Get(ROUTES.authWhoami)
  @UseGuards(new JwtAuthenticationGuard())
  public async testAuth(@Req() req: any): Promise<JwtPayload> {
    return req.user;
  }
}
