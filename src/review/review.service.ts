import {Inject, Injectable} from '@nestjs/common';
import {ReviewModel} from './review.model/review.model';
import {Document, Model, Types} from 'mongoose';
import {CreateReviewDto} from './dto/create-review.dto';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
	constructor(@InjectModel('ReviewSchema') private readonly reviewModel: Model<ReviewModel>) {}

	async create(dto: CreateReviewDto) {
		return this.reviewModel.create(dto);
	}

	async delete(id: string) {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string) {
		return this.reviewModel.find({productId: productId}).exec();
	}

	async deleteAllByProductId(productId: string) {
		return this.reviewModel.deleteMany({productId: new Types.ObjectId(productId)}).exec();
	}
}
