import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ReviewModel, ReviewSchema} from './review.model/review.model';
import { ReviewService } from './review.service';

@Module({
	controllers: [ReviewController],
	imports: [
		MongooseModule.forFeature([{
			name: 'ReviewSchema',
			schema: ReviewSchema,
			collection: 'Review'
		}])
	],
	providers: [ReviewService]
})
export class ReviewModule {}
