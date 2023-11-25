import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductEntity } from 'src/products/entities/product.entity';
import { MenuOrderEntity } from 'src/menus_order/entities/menus_order.entity';

@Entity()
export class MenuEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToMany(() => ProductEntity, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable()
  products: ProductEntity[];

  @OneToMany(() => MenuOrderEntity, (data) => data.menu, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  menuOrders: MenuOrderEntity[];
}
