import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { Request } from 'express';


@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  create(@Body() createOrderDto: { userId: number; items: any[]; total: number }) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAllOrders();
  }

  @Get('me')
  findMyOrders(@Req() req: Request) {
    const userId = req.user?.['id'];
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.ordersService.findOrdersByUser(userId);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOrderById(Number(id));
  }
}
