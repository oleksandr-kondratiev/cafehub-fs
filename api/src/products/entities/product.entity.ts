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

import { IngredientEntity } from 'src/ingredients/entities/ingredient.entity';
import { ProductOrderEntity } from 'src/products_order/entities/products_order.entity';

@Entity()
export class ProductEntity {
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
  category: string;

  @Column()
  subcategory: string;

  @Column()
  price: number;

  @Column()
  weight: number;

  @Column()
  productImage: string;

  @ManyToMany(() => IngredientEntity, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable()
  ingredients: IngredientEntity[];

  @OneToMany(() => ProductOrderEntity, (data) => data.product, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  productOrders: ProductOrderEntity[];
}
