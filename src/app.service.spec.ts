import {Test, TestingModule} from '@nestjs/testing';
import {AppService} from './app.service';
import * as mongoose from 'mongoose';
import {mongoServiceFactory} from './app.module';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [mongoServiceFactory, AppService],
    }).compile();
    appService = app.get<AppService>(AppService);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  it('insertFoo', async () => {
    await expect(appService.insertFoo()).resolves.toBeDefined();
  });
});
