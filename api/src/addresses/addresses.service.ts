import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

import { AddressDto } from './dto/address.dto';
import { AddressEntity } from './entities/address.entity';
import { UserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private usersService: UsersService,
  ) {}

  async findAllUsersAddresses(id: string): Promise<AddressEntity[]> {
    const user = await this.usersRepository.findOne({
      where: { id: id },
      relations: ['addresses'],
    });

    return user.addresses;
  }

  async createAddress(
    address: AddressDto,
    user: UserDto,
  ): Promise<AddressEntity> {
    return await this.addressRepository.save({
      ...address,
      user,
    });
  }

  async updateAddress(id: string, address: AddressDto): Promise<UpdateResult> {
    return await this.addressRepository.update(id, address);
  }

  async createAndUpdateUserAddresses(
    addresses: AddressDto[],
    userId: string,
  ): Promise<AddressEntity[]> {
    const user = await this.usersService.findOne({
      where: { id: userId },
    });

    await Promise.all(
      addresses.map((address) => {
        address.id
          ? this.updateAddress(address.id, address)
          : this.createAddress(address, user);
      }),
    );

    return await this.findAllUsersAddresses(userId);
  }
}
