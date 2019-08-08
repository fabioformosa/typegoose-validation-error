import {Test, TestingModule} from '@nestjs/testing';
import {AppService} from './app.service';
import {BarService} from './bar.service';
import * as mongoose from 'mongoose';
import {mongoServiceFactory} from './app.module';


describe('BarService', () => {
  let barService: BarService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [mongoServiceFactory, BarService, AppService ],
    }).compile();
    barService = app.get<BarService>(BarService);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('BarService test', () => {
    it('insertBar', async () => {
      await expect(barService.insertBar()).resolves.toBeDefined();
    });
  });
});
