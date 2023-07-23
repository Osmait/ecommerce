import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Product from '../domain/Product.model';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import Category from '../../category/domain/Category.model';
import ProductDto from '../controller/product.Dto';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) { }
  public async getProductAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  public async create(product: ProductDto): Promise<void> {
    console.log("created")

    const category: Category = await this.categoryRepository.findOne({
      where: { id: product.categoryId, }
    })
    console.log(category)
    const productDB = new Product()

    productDB.id = randomUUID()
    productDB.description = product.description
    productDB.name = product.name
    productDB.stock = product.stock
    productDB.price = product.price
    productDB.category = category

    this.productRepository.save(productDB)
  }
  public async delete(id: string): Promise<void> {
    this.productRepository.delete(id)
  }
}
