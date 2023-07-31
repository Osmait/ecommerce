import { Injectable } from '@nestjs/common';
import Category from '../domain/Category.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  public async findAll() {
    return await this.categoryRepository.find({
      relations: {
        products: true,
      },
    });
  }
  public async create(category: Category): Promise<void> {
    console.log('create');
    category.id = randomUUID();
    await this.categoryRepository.save(category);
  }
}
