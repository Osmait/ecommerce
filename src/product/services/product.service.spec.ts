import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Repository } from 'typeorm';
import Category from '../../category/domain/Category.model';
import { getRepositoryToken } from '@nestjs/typeorm';
import Product from '../domain/Product.model';
import { UploadFiles } from '../controller/s3';

describe('ProductService', () => {
  let service: ProductService;
  let upload: UploadFiles;
  let productRepository: Repository<Product>;
  let categoryRepository: Repository<Category>;

  const CATEGORY_REPOSITORY_TOKEN = getRepositoryToken(Category);

  const PRODUCT_REPOSITORY_TOKEN = getRepositoryToken(Product);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        UploadFiles,
        {
          provide: PRODUCT_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: CATEGORY_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<ProductService>(ProductService);
    upload = module.get<UploadFiles>(UploadFiles);
    productRepository = module.get<Repository<Product>>(
      PRODUCT_REPOSITORY_TOKEN,
    );
    categoryRepository = module.get<Repository<Category>>(
      CATEGORY_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
