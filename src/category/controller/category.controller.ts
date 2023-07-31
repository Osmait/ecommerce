import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import Category from '../domain/Category.model';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  public getAllCategory() {
    return this.categoryService.findAll();
  }

  @Post()
  public createCategory(@Body() category: Category) {
    this.categoryService.create(category);
    return 'Created';
  }
}
