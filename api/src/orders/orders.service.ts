import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AddressEntity } from 'src/addresses/entities/address.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { OrderEntity } from './entities/order.entity';
import { ProductOrderEntity } from 'src/products_order/entities/products_order.entity';
import { MenuOrderEntity } from 'src/menus_order/entities/menus_order.entity';
import { MenuEntity } from 'src/menus/entities/menu.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private ordersRepository: Repository<OrderEntity>,
    @InjectRepository(ProductOrderEntity)
    private productsOrderRepository: Repository<ProductOrderEntity>,
    @InjectRepository(MenuOrderEntity)
    private menusOrderRepository: Repository<MenuOrderEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(AddressEntity)
    private addressesRepository: Repository<AddressEntity>,
    @InjectRepository(MenuEntity)
    private menusRepository: Repository<MenuEntity>,
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  async findAllUsersOrders(id: string) {
    const { orders } = await this.usersRepository.findOne({
      where: { id },
      relations: ['orders'],
    });

    return await Promise.all(
      orders.map(async (order) => {
        return await this.ordersRepository.findOne({
          where: { id: order.id },
          relations: ['user', 'address', 'products', 'menus'],
        });
      }),
    );
  }

  async addUserToOrder(id: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({
      where: { id },
    });
  }

  async addAddressToOrder(id: string): Promise<AddressEntity> {
    return await this.addressesRepository.findOne({
      where: {
        id,
      },
    });
  }

  async addProductToOrder(products: string[]) {
    const uniqueProducts = [...new Set(products)];

    return await Promise.all(
      uniqueProducts.map(async (id) => {
        const productOrder = await this.productsOrderRepository.save({
          product: await this.productsRepository.findOne({
            where: {
              id,
            },
          }),
          count: products.filter((product) => product === id).length,
        });
        return productOrder;
      }),
    );
  }

  async addMenuToOrder(menus: string[]) {
    const uniqueMenus = [...new Set(menus)];

    return await Promise.all(
      uniqueMenus.map(async (id) => {
        const order = await this.menusOrderRepository.save({
          menu: await this.menusRepository.findOne({
            where: {
              id,
            },
          }),
          count: menus.filter((menu) => menu === id).length,
        });
        return order;
      }),
    );
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    const user = await this.addUserToOrder(createOrderDto.user);
    this.GenerateOrderId(user);

    await this.ordersRepository.save({
      ...createOrderDto,
      countId: await this.GenerateOrderId(user),
      address: await this.addAddressToOrder(createOrderDto.address),
      user: user,
      menus: await this.addMenuToOrder(createOrderDto.menus),
      products: await this.addProductToOrder(createOrderDto.products),
    });
  }

  async GenerateOrderId(user: UserEntity) {
    const [_, count] = await this.ordersRepository
      .createQueryBuilder('order')
      .select('order')
      .addSelect('order.user')
      .where('order.user.id = :id', { id: user.id })
      .getManyAndCount();

    return count + 1;
  }

  async findAllOrders() {
    const [orders] = await this.ordersRepository
      .createQueryBuilder('order')
      .select('order')
      .orderBy('order.date')
      .getManyAndCount();

    return orders;
  }

  async findAllById(id: string) {
    const [orders] = await this.ordersRepository
      .createQueryBuilder('order')
      .select('order')
      .where('order.id = :id', { id: id })
      .orderBy('order.date', 'DESC')
      .getManyAndCount();

    return orders;
  }

  async findOneOrder(id: string) {
    return await this.ordersRepository.findOne({
      where: { id: id },
      relations: ['user', 'address', 'products', 'menus'],
    });
  }

  async updateOrder(updateOrderDto: UpdateOrderDto) {
    return await this.ordersRepository.update(
      updateOrderDto.id,
      updateOrderDto,
    );
  }

  async removeOrder(id: string) {
    return await this.ordersRepository.delete(id);
  }
}
