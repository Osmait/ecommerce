import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from '../service/orders.service';
import Order from '../domain/Order.model';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  public findAll() {
    return this.orderService.findAll();
  }

  @Post()
  public create(@Body() order: Order) {
    this.orderService.created(order);
    return 'Created';
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    this.orderService.remove(id);
    return 'Deleted';
  }
}
