import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import OrderItem from "./OrderItem.model"
import { User } from "../../user/domain/user.model";


@Entity()
export default class Order {
  @PrimaryColumn()
  id: string

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[]
  @ManyToOne(() => User, user => user.orders)
  user: User

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
