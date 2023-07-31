import Category from '../../category/domain/Category.model';
import {
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export default class Product {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column()
  stock: number;
  @Column('varchar', {
    nullable: true,
  })
  imagen: string | null;
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

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
