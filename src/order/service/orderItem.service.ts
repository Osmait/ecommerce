import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import OrderItem from "../domain/OrderItem.model";
import Order from "../domain/Order.model";
import { OrderItemDto } from "../controllers/orderItems.Dto";
import Product from "src/product/domain/Product.model";
import { randomUUID } from "crypto";

@Injectable()
export default class ServiceOrderItem {

  constructor(
    @InjectRepository(OrderItem) private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) { }
  public async create(data: OrderItemDto): Promise<void> {
    const order = await this.orderRepo.findOne({
      where: { id: data.orderId },
    });
    const product = await this.productRepo.findOne({
      where: { id: data.productId },
    });
    const item = new OrderItem();
    item.id = randomUUID()
    item.order = order;
    item.product = product;
    item.quantity = data.quantity;
    this.orderItemRepository.save(item);
  }

}

