import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { FooService } from './service/foo.service';
import { MongoService } from './mongo.service';
import {BarService} from './service/bar.service';

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
  providers: [FooService, BarService, mongoServiceFactory],
})
export class AppModule {}
