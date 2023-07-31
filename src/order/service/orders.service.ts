import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Order from '../domain/Order.model';
import { randomUUID } from 'crypto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}
  public async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['items', 'items.product'],
    });
  }

  public async created(order: Order): Promise<void> {
    order.id = randomUUID();
    this.orderRepository.save(order);
  }

  public async remove(id: string): Promise<void> {
    this.orderRepository.delete(id);
  }
}
