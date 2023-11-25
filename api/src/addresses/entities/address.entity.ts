import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from 'src/users/entities/user.entity';
import { OrderEntity } from 'src/orders/entities/order.entity';

@Entity()
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  address: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => UserEntity, (data) => data.addresses, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @OneToMany(() => OrderEntity, (data) => data.address, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  orders: OrderEntity[];
}
