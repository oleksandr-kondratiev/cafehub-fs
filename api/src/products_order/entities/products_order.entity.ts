import { OrderEntity } from 'src/orders/entities/order.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductOrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @ManyToOne(() => ProductEntity, (data) => data.productOrders, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  product: ProductEntity;

  @ManyToOne(() => OrderEntity, (data) => data.products, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  order: OrderEntity;
}
