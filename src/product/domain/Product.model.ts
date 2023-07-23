import Category from "../../category/domain/Category.model"
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"


@Entity()
export default class Product {
  @PrimaryColumn()
  id: string
  @Column()
  name: string
  @Column()
  price: number
  @Column()
  description: string
  @Column()
  stock: number

  @ManyToOne(() => Category, (category) => category.products)
  category: Category


}

