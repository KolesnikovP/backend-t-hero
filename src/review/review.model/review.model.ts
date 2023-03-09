import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Types} from 'mongoose';

@Schema()
export class ReviewModel {
	@Prop()
	_id: string;

	@Prop()
	productId: Types.ObjectId;

	@Prop()
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
