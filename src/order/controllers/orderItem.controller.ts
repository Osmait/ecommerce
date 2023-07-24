import { Body, Controller, Post } from "@nestjs/common";
import ServiceOrderItem from "../service/orderItem.service";
import { OrderItemDto } from "./orderItems.Dto";


@Controller("order-item")
class OrderItemController {

  constructor(private orderItemServie: ServiceOrderItem) { }

  @Post()
  public created(@Body() orderItem: OrderItemDto) {
    this.orderItemServie.create(orderItem)
    return "created"
  }
}
