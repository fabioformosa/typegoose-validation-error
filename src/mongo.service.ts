import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';

export class MongoService {
  public async connect(): Promise<void> {
    Logger.debug('MongoDB In Memory connecting...');
    Logger.debug(`Got datasource! mongodb://localhost:27017/ `);
    await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'typegooseTest' });
    Logger.debug('Connected to datasource!');
    const mongoDB: mongoose.Connection = mongoose.connection;
    mongoDB.once('open', () => Logger.debug(`Connected to MongoDB mongodb://localhost:27017/`));
    mongoDB.on('error', error => Logger.debug(`Unexpected error connecting to MongoDB mongodb://localhost:27017/ due to ${error}`));
  }
}
