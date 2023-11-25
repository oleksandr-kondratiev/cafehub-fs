import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

import { OrderEntity } from './entities/order.entity';
import { AddressEntity } from 'src/addresses/entities/address.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { ProductOrderEntity } from 'src/products_order/entities/products_order.entity';
import { MenuOrderEntity } from 'src/menus_order/entities/menus_order.entity';
import { MenuEntity } from 'src/menus/entities/menu.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      AddressEntity,
      ProductOrderEntity,
      MenuOrderEntity,
      UserEntity,
      ProductEntity,
      MenuEntity,
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
