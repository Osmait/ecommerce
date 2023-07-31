import Product from '../../product/domain/Product.model';
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';
import Order from './Order.model';

@Entity()
export default class OrderItem {
  @PrimaryColumn()
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
