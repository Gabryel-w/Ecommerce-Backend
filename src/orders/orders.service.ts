import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }

  async createOrder(data: {
    userId: number;
    items: any[];
    total: number;
  }) {
    return this.prisma.order.create({
      data: {
        userId: data.userId,
        items: data.items,
        total: data.total,
      },
    });
  }

  async findAllOrders() {
    return this.prisma.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOrdersByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        orderItems: true,
      },
    });

  }


  async findOrderById(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }
}
