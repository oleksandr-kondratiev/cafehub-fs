import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { ProductEntity } from './entities/product.entity';
import { IngredientEntity } from 'src/ingredients/entities/ingredient.entity';

import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
    @InjectRepository(IngredientEntity)
    private ingredientsRepository: Repository<IngredientEntity>,
  ) {}

  async addIngredientToProduct(
    ingredients: string[],
    createProductDto: ProductDto | UpdateProductDto,
  ) {
    const foundIngredients = await Promise.all(
      ingredients.map((id) => {
        const reps = this.ingredientsRepository.findOne({
          where: {
            id,
          },
        });

        return reps;
      }),
    );

    return await this.productsRepository.save({
      ...createProductDto,
      ingredients: foundIngredients,
    });
  }

  async createProduct(createProductDto: ProductDto) {
    return await this.addIngredientToProduct(
      createProductDto.ingredients,
      createProductDto,
    );
  }

  async findAllProducts(): Promise<ProductEntity[]> {
    return await this.productsRepository.find({
      relations: ['ingredients'],
    });
  }

  async findOneProduct(id: string): Promise<ProductEntity> {
    return await this.productsRepository.findOne({
      where: { id: id },
      relations: ['ingredients'],
    });
  }

  async updateProduct(updateProduct: UpdateProductDto) {
    return await this.addIngredientToProduct(
      updateProduct.ingredients,
      updateProduct,
    );
  }

  async removeProduct(id: string): Promise<DeleteResult> {
    return await this.productsRepository.delete(id);
  }
}
