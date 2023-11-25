import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { OrderEntity } from './entities/order.entity';

import { OrdersService } from './orders.service';

import { ROUTES } from 'src/constants/routes';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller(ROUTES.orders)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post(ROUTES.create)
  @ApiOperation({ summary: ROUTES.create })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: ROUTES.create,
    type: OrderEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get(ROUTES.getAll)
  @ApiOperation({ summary: ROUTES.getAll })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getAll,
    type: OrderEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.ordersService.findAllOrders();
  }

  @Get(ROUTES.getAllById)
  @ApiOperation({ summary: ROUTES.getAllById })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getAllById,
    type: OrderEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
  @HttpCode(HttpStatus.OK)
  findAllById(@Param('id') id: string) {
    return this.ordersService.findAllUsersOrders(id);
  }

  @Get(ROUTES.getOne)
  @ApiOperation({ summary: ROUTES.getOne })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getOne,
    type: OrderEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.ordersService.findOneOrder(id);
  }

  @Patch(ROUTES.update)
  @ApiOperation({ summary: ROUTES.update })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.update,
    type: OrderEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
  @HttpCode(HttpStatus.OK)
  update(@Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateOrder(updateOrderDto);
  }

  @Delete(ROUTES.delete)
  @ApiOperation({ summary: ROUTES.delete })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.delete,
    type: OrderEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.ordersService.removeOrder(id);
  }
}
