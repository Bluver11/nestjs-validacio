import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService,PrismaService],
})
export class CoffeeModule {}
