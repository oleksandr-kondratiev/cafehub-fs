import { MenuEntity } from 'src/menus/entities/menu.entity';
import { OrderEntity } from 'src/orders/entities/order.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuOrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @ManyToOne(() => MenuEntity, (data) => data.menuOrders, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  menu: MenuEntity;

  @ManyToOne(() => OrderEntity, (data) => data.menus, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  order: OrderEntity;
}
