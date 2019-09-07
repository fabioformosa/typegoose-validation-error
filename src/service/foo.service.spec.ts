import {Test, TestingModule} from '@nestjs/testing';
import { BarService } from './bar.service';
import {FooService} from './foo.service';
import * as mongoose from 'mongoose';
import {mongoServiceFactory} from '../app.module';

describe('FooService', () => {
  let barService: BarService;
  let fooService: FooService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [mongoServiceFactory, BarService, FooService],
    }).compile();
    barService = app.get<BarService>(BarService);
    fooService = app.get<FooService>(FooService);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  it('insertFoo', async () => {
    mongoose.set('debug', true);
    // await expect(fooService.insertFoo()).resolves.toBeDefined();

    // let bar = barService.insertAndRetrieveOneBar();

    const fooDocument = await fooService.insertFoo();
    expect(fooDocument).toBeDefined();
    expect(fooDocument.bar).toBeDefined();
    expect(fooDocument.bar.fieldOne).toEqual('fieldOne');

    const retrievedFoo = await fooService.retrieveById(fooDocument._id);
    expect(retrievedFoo).toBeDefined();
    expect(retrievedFoo.bar).toBeDefined();
    expect(retrievedFoo.bar.fieldOne).toEqual('fieldOne');

  });
});
