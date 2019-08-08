import { Injectable, Logger } from '@nestjs/common';
import Bar from '../model/foo/bar';
import {InstanceType} from 'typegoose';
import Foo, { FooModel } from '../model/foo/foo';

@Injectable()
export class FooService {

  async insertFoo():Promise<InstanceType<Foo>>{
    Logger.debug('Saving a foo...');

    const bar = new Bar();
    bar.fieldOne = 'fieldOne';
    bar.fieldTwo = 'fieldTwo';

    const foo = new Foo();
    foo.bar = bar;

    const fooModel: InstanceType<Foo> = new FooModel(foo);
    return await fooModel.save();
  }

}
