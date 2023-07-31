import Order from '../../order/domain/Order.model';
import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  role: userRole;

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

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}

export enum userRole {
  Admin,
  Customer,
}
