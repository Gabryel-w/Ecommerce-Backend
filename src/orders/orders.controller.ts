import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: { userId: number; items: any[]; total: number }) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAllOrders();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.ordersService.findOrdersByUser(Number(userId));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOrderById(Number(id));
  }
}
