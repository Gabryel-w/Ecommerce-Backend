import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(
    @Body()
    body: {
      totalAmount: number;
      items: {
        productId: string;
        name: string;
        price: number;
        quantity: number;
      }[];
    },
  ) {
    return this.ordersService.createOrder(body);
  }

  @Get()
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}
