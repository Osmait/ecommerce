import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import Order from '../domain/Order.model';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersService } from '../service/orders.service';

describe('OrdersController', () => {
  let controller: OrdersController;

  let orderRepository: Repository<Order>;

  const ORDER_REPOSITORY_TOKEN = getRepositoryToken(Order);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        OrdersService,
        {
          provide: ORDER_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);

    orderRepository = module.get<Repository<Order>>(ORDER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
