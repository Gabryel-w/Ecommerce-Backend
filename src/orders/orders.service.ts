import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  async createOrder(data: {
    totalAmount: number;
    items: {
      productId: string;
      name: string;
      price: number;
      quantity: number;
    }[];
  }) {
    const order = await prisma.order.create({
      data: {
        totalAmount: data.totalAmount,
        items: {
          create: data.items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });

    return order;
  }

  async getAllOrders() {
    return prisma.order.findMany({
      include: { items: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
