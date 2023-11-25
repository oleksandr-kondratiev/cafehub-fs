import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

import { IngredientDto } from './dto/ingredient.dto';

import { IngredientEntity } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(IngredientEntity)
    private ingredientRepository: Repository<IngredientEntity>,
  ) {}

  async createIngredient(
    createProductDto: IngredientDto,
  ): Promise<IngredientDto> {
    return await this.ingredientRepository.save(createProductDto);
  }

  async findAllIngredients(): Promise<Observable<IngredientEntity[]>> {
    return from(this.ingredientRepository.find({}));
  }

  async removeIngredient(id: string): Promise<DeleteResult> {
    return await this.ingredientRepository.delete(id);
  }
}
