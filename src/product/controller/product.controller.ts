import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import ProductDto from './product.Dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }
  @Get()
  public getProduct() {
    return this.productService.getProductAll();
  }
  @Post()
  public create(@Body() product: ProductDto) {

    this.productService.create(product);
    return "Created"
  }
  @Delete(":id")
  public delete(@Param("id") id: string) {
    this.productService.delete(id)
    return `Delete ${id}`
  }
}
