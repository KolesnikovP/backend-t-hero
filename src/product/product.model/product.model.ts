import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
class ProductCharacteristics {
	@Prop()
	name: string;

	@Prop()
	value: string;
}

export class ProductModel {
	@Prop()
	_id: string;

	@Prop()
	image: string;

	@Prop()
	title: string;

	@Prop()
	price: number;

	@Prop()
	oldPrice: number;

	@Prop()
	discount: number;

	@Prop()
	calculatedRating: number;

	@Prop()
	description: string;

	@Prop()
	advantages: string;

	@Prop()
	disAdvantages: string;

	@Prop({type: () => [String]})
	categories: string[];

	@Prop({type: () => [String]})
	tags: string[];

	@Prop({type: () => [ProductCharacteristics]})
	characteristics: ProductCharacteristics[];

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
