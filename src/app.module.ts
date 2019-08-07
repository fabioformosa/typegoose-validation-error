import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoService } from './mongo.service';

export const mongoServiceFactory = {
  provide: 'MongoService',
  useFactory: async () => {
    Logger.debug('Creating mongo service...');
    let mongoService = new MongoService();
    await mongoService.connect();
    return mongoService;
  },
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, mongoServiceFactory],
})
export class AppModule {}
