import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { AddressEntity } from 'src/addresses/entities/address.entity';
import { OrderEntity } from 'src/orders/entities/order.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  phone_number?: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  role: string;

  @OneToMany(() => AddressEntity, (data) => data.user, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  addresses: AddressEntity[];

  @OneToMany(() => OrderEntity, (data) => data.user, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  orders: OrderEntity[];
}
