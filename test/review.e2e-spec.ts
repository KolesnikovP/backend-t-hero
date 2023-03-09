import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {CreateReviewDto} from '../src/review/dto/create-review.dto';
import {disconnect, Types} from 'mongoose';
import {REVIEW_NOT_FOUND} from '../src/review/review.constants';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
	_id: '8',
	productId,
	name: 'test name',
	title: 'test title',
	description: 'test decription',
	rating: 5,
};

describe('Review Controller (e2e)', () => {
	let app: INestApplication;
	let createdId: string;

	beforeEach(async () => {
	const moduleFixture: TestingModule = await Test.createTestingModule({
		imports: [AppModule],
	}).compile();

	app = moduleFixture.createNestApplication();
	await app.init();
	});

	it('create review /review/create (POST)', () => {
	return request(app.getHttpServer())
		.post('/review/create')
		.send(testDto)
		.expect(201)
		.then((res: request.Response) => {
			const {body} = res;
			createdId = body._id;
			expect(createdId).toBeDefined();
		});
	});

	it('success find review /review/byProduct/:productId (GET)', () => {
		return request(app.getHttpServer())
			.get('/review/byProduct/' + productId)
			.expect(200)
			.then(({body}: request.Response) => {
				expect(body.length).toBe(1);
			});
	});

	it('failed find review /review/byProduct/:productId (GET)', () => {
		return request(app.getHttpServer())
			.get('/review/byProduct/' + productId + 0)
			.expect(200)
			.then(({body}: request.Response) => {
				expect(body.length).toBe(0);
			});
	});

	it('success delete review /review/:id (DELETE)', () => {
		return request(app.getHttpServer())
			.delete('/review/' + createdId)
			.expect(200);
	});

	it('failed delete review /review/:id (DELETE)', () => {
		return request(app.getHttpServer())
			.delete('/review/' + createdId)
			.expect(404, {
				statusCode: 404,
				message: REVIEW_NOT_FOUND
			});
	});

	afterAll(()=> {
		disconnect();
	});
});
