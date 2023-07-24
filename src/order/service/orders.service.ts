import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Order from '../domain/Order.model';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>

  ) { }

  public async findAll(): Promise<Order[]> {
    return this.orderRepository.find()
  }

  public async created(order: Order): Promise<void> {

    this.orderRepository.save(order)

  }

  public async remove(id: string): Promise<void> {
    this.orderRepository.delete(id)
  }
}
