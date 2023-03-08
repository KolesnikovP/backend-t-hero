import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class AuthModel {
	_id: string;

	@Prop({unique: true})
	email: string;

	@Prop()
	passwordHash: string;

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
