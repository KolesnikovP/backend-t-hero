import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {TopPageModel, TopPageSchema} from './top-page.model/top-page.model';

@Module({
	controllers: [TopPageController],
	imports: [
		MongooseModule.forFeature([{
			name: 'TopPageSchema',
			schema: TopPageSchema,
			collection: 'TopPage'
		}])
	]
})
export class TopPageModule {}
