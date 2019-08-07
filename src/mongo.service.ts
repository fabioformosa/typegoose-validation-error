import * as mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Logger } from '@nestjs/common';

export class MongoService {
  public async connect(): Promise<void> {
    Logger.debug('MongoDB In Memory connecting...');
    const dataSource = await this.getDataSource();
    Logger.debug(`Got datasource! ${dataSource} `);
    await mongoose.connect(dataSource, { useNewUrlParser: true });
    Logger.debug('Connected to datasource!');
    const mongoDB: mongoose.Connection = mongoose.connection;
    // var db = mongoose.createConnection('mongodb://localhost/cj');
    // db.once('open', function() { ... });
    mongoDB.once('open', () => Logger.debug(`Connected to MongoDB ${dataSource}`));
    mongoDB.on('error', error => Logger.debug(`Unexpected error connecting to MongoDB ${dataSource} due to ${error}`));
  }

  private async getDataSource(): Promise<string> {
      const mongoMemoryServer = new MongoMemoryServer();
      return await mongoMemoryServer.getConnectionString();
  }
}
