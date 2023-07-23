import Product from "../../product/domain/Product.model"

import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"


@Entity()
export default class Category {
  @PrimaryColumn()
  id: string
  @Column()
  name: string
  @Column()
  description: string

  @OneToMany(() => Product, (product) => product.category)
  products: Product[]
}
