import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './service/orders.service';
import { ProductModule } from 'src/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Order from './domain/Order.model';
import OrderItem from './domain/OrderItem.model';
import { OrderItemController } from './controllers/orderItem.controller';
import ServiceOrderItem from './service/orderItem.service';

@Module({
  imports: [ProductModule, TypeOrmModule.forFeature([Order, OrderItem])],
  controllers: [OrdersController, OrderItemController],
  providers: [OrdersService, ServiceOrderItem],
  exports: [TypeOrmModule],
})
export class OrderModule {}
