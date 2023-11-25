import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { IngredientEntity } from './entities/ingredient.entity';
import { IngredientsService } from './ingredients.service';
import { IngredientDto } from './dto/ingredient.dto';

import { ROUTES } from 'src/constants/routes';
import { ERRORS } from 'src/constants/errors';

@Controller(ROUTES.ingredients)
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post(ROUTES.create)
  @ApiOperation({ summary: ROUTES.create })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: ROUTES.update,
    type: IngredientEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.ingredient_create_error,
  })
  @HttpCode(HttpStatus.CREATED)
  createIngredient(
    @Body() createIngredientDto: IngredientDto,
  ): Promise<IngredientDto> {
    return this.ingredientsService.createIngredient(createIngredientDto);
  }

  @Get(ROUTES.getAll)
  @ApiOperation({ summary: ROUTES.getAll })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.getAll,
    type: IngredientEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.ingredient_get_error,
  })
  @HttpCode(HttpStatus.OK)
  findAllIngredients(): Promise<Observable<IngredientEntity[]>> {
    return this.ingredientsService.findAllIngredients();
  }

  @Delete(ROUTES.delete)
  @ApiOperation({ summary: ROUTES.delete })
  @ApiResponse({
    status: HttpStatus.OK,
    description: ROUTES.delete,
    type: IngredientEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: ERRORS.ingredient_delete_error,
  })
  @HttpCode(HttpStatus.OK)
  removeIngredient(@Param('id') id: string): Promise<DeleteResult> {
    return this.ingredientsService.removeIngredient(id);
  }
}
