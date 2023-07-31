import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from '../services/product.service';
import { UploadFiles } from './s3';
import { Repository } from 'typeorm';
import Category from '../../category/domain/Category.model';
import { getRepositoryToken } from '@nestjs/typeorm';
import Product from '../domain/Product.model';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;
  let uploadFile: UploadFiles;
  let categoryRepository: Repository<Category>;
  let productRepository: Repository<Product>;
  const CATEGORY_REPOSITORY_TOKEN = getRepositoryToken(Category);
  const PRODUCT_REPOSITORY_TOKEN = getRepositoryToken(Product);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        UploadFiles,
        {
          provide: CATEGORY_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: PRODUCT_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
    uploadFile = module.get<UploadFiles>(UploadFiles);
    categoryRepository = module.get<Repository<Category>>(
      CATEGORY_REPOSITORY_TOKEN,
    );
    productRepository = module.get<Repository<Product>>(
      PRODUCT_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
