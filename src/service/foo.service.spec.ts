import {Test, TestingModule} from '@nestjs/testing';
import {FooService} from './foo.service';
import * as mongoose from 'mongoose';
import {mongoServiceFactory} from '../app.module';

describe('FooService', () => {
  let fooService: FooService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [mongoServiceFactory, FooService],
    }).compile();
    fooService = app.get<FooService>(FooService);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  it('insertFoo', async () => {
    // await expect(fooService.insertFoo()).resolves.toBeDefined();

    const fooDocument = await fooService.insertFoo();
    expect(fooDocument).toBeDefined();
    expect(fooDocument.bar).toBeDefined();
    expect(fooDocument.bar.fieldOne).toEqual('fieldOne');

  });
});
