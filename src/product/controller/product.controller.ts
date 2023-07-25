import { Controller, Get, Param, Post, Delete, Body, Query } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { FilterProductsDto, ProductDto } from './product.Dto';


@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }
  @Get()
  public getProduct(@Query() params: FilterProductsDto) {
    return this.productService.getProductAll(params);
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
