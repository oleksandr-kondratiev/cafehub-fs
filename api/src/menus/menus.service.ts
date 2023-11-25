import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { MenuEntity } from './entities/menu.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

import { MenuDto } from './dto/menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(MenuEntity)
    private menusRepository: Repository<MenuEntity>,
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  async addProductToMenu(
    products: string[],
    createMenuDto: MenuDto | UpdateMenuDto,
  ) {
    const foundProducts = await Promise.all(
      products.map((id) => {
        const reps = this.productsRepository.findOne({
          where: {
            id,
          },
        });

        return reps;
      }),
    );

    return await this.menusRepository.save({
      ...createMenuDto,
      products: foundProducts,
    });
  }

  async createMenu(createMenuDto: MenuDto) {
    return await this.addProductToMenu(createMenuDto.products, createMenuDto);
  }

  async findAllMenus(): Promise<MenuEntity[]> {
    return await this.menusRepository.find({
      relations: ['products'],
    });
  }

  async findOneMenu(id: string): Promise<MenuEntity> {
    return await this.menusRepository.findOne({
      where: { id: id },
      relations: ['products'],
    });
  }

  async updateMenu(updateMenu: UpdateMenuDto) {
    return await this.addProductToMenu(updateMenu.products, updateMenu);
  }

  async removeMenu(id: string): Promise<DeleteResult> {
    return await this.menusRepository.delete(id);
  }
}
