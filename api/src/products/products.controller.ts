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
import { DeleteResult } from 'typeorm';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { ProductsService } from './products.service';

import { ProductEntity } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-products.dto';

import { ROUTES } from 'src/constants/routes';
import { ERRORS } from 'src/constants/errors';

@Controller(ROUTES.products)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post(ROUTES.create)
  @ApiOperation({ summary: ROUTES.create })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: ROUTES.create,
    type: ProductEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.products_create_error,
  })
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() createProductDto: ProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get(ROUTES.getAll)
  @ApiOperation({ summary: ROUTES.getAll })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getAll,
    type: ProductEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.products_get_error,
  })
  @HttpCode(HttpStatus.OK)
  findAllProducts(): Promise<ProductEntity[]> {
    return this.productsService.findAllProducts();
  }

  @Get(ROUTES.getOne)
  @ApiOperation({ summary: ROUTES.getOne })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getOne,
    type: ProductEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.products_get_error,
  })
  @HttpCode(HttpStatus.OK)
  findOneProduct(@Param('id') id: string): Promise<ProductEntity> {
    return this.productsService.findOneProduct(id);
  }

  @Patch(ROUTES.update)
  @ApiOperation({ summary: ROUTES.update })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.update,
    type: ProductEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.products_update_error,
  })
  @HttpCode(HttpStatus.OK)
  updateProduct(@Body() updateProduct: UpdateProductDto) {
    return this.productsService.updateProduct(updateProduct);
  }

  @Delete(ROUTES.delete)
  @ApiOperation({ summary: ROUTES.delete })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.delete,
    type: ProductEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.products_update_error,
  })
  @HttpCode(HttpStatus.OK)
  removeProduct(@Param('id') id: string): Promise<DeleteResult> {
    return this.productsService.removeProduct(id);
  }
}
