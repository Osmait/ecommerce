import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { FilterProductsDto, ProductDto } from './product.Dto';
import { Public } from 'src/auth/guard/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

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
    return 'Created';
  }
  @Public()
  @Post('upload:id')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImagen(@Param("id") id: string, @UploadedFile() image: Express.Multer.File) {
    this.productService.upload(id, image)
  }
  @Delete(':id')
  public delete(@Param('id') id: string) {
    this.productService.delete(id);
    return `Delete ${id}`;
  }
}
