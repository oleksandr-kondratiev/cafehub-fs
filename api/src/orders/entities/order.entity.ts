import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { AddressEntity } from 'src/addresses/entities/address.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { ProductOrderEntity } from 'src/products_order/entities/products_order.entity';
import { MenuOrderEntity } from 'src/menus_order/entities/menus_order.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  countId: number;

  @Column()
  price: number;

  @Column()
  date: Date;

  @Column()
  deliveryDate: Date;

  @Column()
  status: string;

  @Column()
  comment: string;

  @ManyToOne(() => UserEntity, (data) => data.orders, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(() => AddressEntity, (data) => data.orders, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  address: AddressEntity;

  @OneToMany(() => ProductOrderEntity, (data) => data.order, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  products: ProductOrderEntity[];

  @OneToMany(() => MenuOrderEntity, (data) => data.order, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  menus: MenuOrderEntity[];
}
