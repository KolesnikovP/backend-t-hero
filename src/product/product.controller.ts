import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model/product.model';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get(':id')
  async get(@Param('id') id: string) { }

  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) { }

  @Delete(':id')
  async delete(@Param('id') id: string) { }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) { }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindProductDto) { }
}
