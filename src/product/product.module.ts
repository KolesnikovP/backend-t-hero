import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ProductModel, ProductSchema} from './product.model/product.model';

@Module({
	controllers: [ProductController],
	imports: [
		MongooseModule.forFeature([{
			name: 'ProductSchema',
			schema: ProductSchema,
			collection: 'Product'
		}])
	]
})
export class ProductModule {}
