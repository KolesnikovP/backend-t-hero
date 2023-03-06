import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model/top-page.model';
import { Body, Delete, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller('top-page')
export class TopPageController {
  @Get(':id')
  async get(@Param('id') id: string) { }

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) { }

  @Delete(':id')
  async delete(@Param('id') id: string) { }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) { }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPageDto) { }
}
