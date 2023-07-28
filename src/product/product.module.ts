import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './domain/Product.model';
import { CategoryModule } from 'src/category/category.module';
import { UploadFiles } from './controller/s3';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
  controllers: [ProductController],
  providers: [ProductService, UploadFiles],
  exports: [TypeOrmModule],
})
export class ProductModule { }
