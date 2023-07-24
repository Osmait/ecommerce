import { CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import OrderItem from "./OrderItem.model"


@Entity()
export default class Order {
  @PrimaryColumn()
  id: string

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[]

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
