import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { MenusService } from './menus.service';

import { MenuEntity } from './entities/menu.entity';
import { MenuDto } from './dto/menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

import { ROUTES } from 'src/constants/routes';
import { ERRORS } from 'src/constants/errors';

@Controller(ROUTES.menus)
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post(ROUTES.create)
  @ApiOperation({ summary: ROUTES.create })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: ROUTES.create,
    type: MenuEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.menus_create_error,
  })
  @HttpCode(HttpStatus.OK)
  createMenu(@Body() createMenuDto: MenuDto): Promise<MenuEntity> {
    return this.menusService.createMenu(createMenuDto);
  }

  @Get(ROUTES.getAll)
  @ApiOperation({ summary: ROUTES.getAll })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getAll,
    type: MenuEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.menus_get_error,
  })
  @HttpCode(HttpStatus.OK)
  findAllMenus(): Promise<MenuEntity[]> {
    return this.menusService.findAllMenus();
  }

  @Get(ROUTES.getOne)
  @ApiOperation({ summary: ROUTES.getOne })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getOne,
    type: MenuEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.menus_get_error,
  })
  @HttpCode(HttpStatus.OK)
  findOneMenu(@Param('id') id: string): Promise<MenuEntity> {
    return this.menusService.findOneMenu(id);
  }

  @Patch(ROUTES.update)
  @ApiOperation({ summary: ROUTES.update })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.update,
    type: MenuEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.menus_update_error,
  })
  @HttpCode(HttpStatus.OK)
  updateMenu(@Body() updateProduct: UpdateMenuDto): Promise<MenuEntity> {
    return this.menusService.updateMenu(updateProduct);
  }

  @Delete(ROUTES.delete)
  @ApiOperation({ summary: ROUTES.delete })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.delete,
    type: MenuEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.menus_update_error,
  })
  @HttpCode(HttpStatus.OK)
  removeMenu(@Param('id') id: string): Promise<DeleteResult> {
    return this.menusService.removeMenu(id);
  }
}
