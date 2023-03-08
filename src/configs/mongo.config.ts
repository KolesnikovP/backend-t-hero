import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export async function getMongoConfig(config: ConfigService): Promise<MongooseModuleFactoryOptions> {
	return {
		uri: getMongoUri(config),
		...getMongoOptions(),
	};
}

function getMongoUri(config: ConfigService): string {
	const user = config.get('MONGO_LOGIN');
	const password = config.get('MONGO_PASSWORD');
	const host = config.get('MONGO_HOST');
	const port = config.get('MONGO_PORT');
	const database = config.get('MONGO_DB');

	return `mongodb://${user}:${password}@${host}:${port}/${database}`;
}


function getMongoOptions(): MongooseModuleFactoryOptions {
	return {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
}
