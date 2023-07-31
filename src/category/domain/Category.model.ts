import Product from '../../product/domain/Product.model';

import {
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export default class Category {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
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
