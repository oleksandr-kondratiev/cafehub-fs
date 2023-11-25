import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

import { comparePassword, encodePassword } from 'src/utils/bcrypt';
import { comparePasswords } from '../utils/compare-password';

import { UpdateUserDto, UpdateUserPasswordDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const password = encodePassword(createUserDto.password);
    return await this.userRepository.save({ ...createUserDto, password });
  }

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepository.findOne(options);
    return user;
  }

  async findByEmail({ email, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['addresses'],
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const areEqual = await comparePasswords(user.password, password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async findByPayload({ payload }: any): Promise<UserDto> {
    return await this.findOne({
      where: { payload },
    });
  }

  async updateUser(id: string, UpdateUser: UpdateUserDto): Promise<UserDto> {
    await this.userRepository.update(id, UpdateUser);
    return await this.findOne({
      where: { id },
    });
  }

  async findOnePassword(id: string): Promise<string> {
    const user = await this.userRepository.findOne({ where: { id } });
    return user.password;
  }

  async updateUserPassword(
    id: string,
    UpdateUserPassword: UpdateUserPasswordDto,
  ): Promise<UserDto> {
    const userPassword = await this.findOnePassword(id);

    if (comparePassword(UpdateUserPassword.previousPassword, userPassword)) {
      await this.userRepository.update(id, {
        password: encodePassword(UpdateUserPassword.newPassword),
      });
      return await this.findOne({
        where: { id },
      });
    } else {
      throw new HttpException(
        'You have entered the wrong password! Please try again.',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async removeUser(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
