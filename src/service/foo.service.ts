import { Injectable, Logger } from '@nestjs/common';
import Bar, {BarModel} from '../model/foo/bar';
import { Foo, FooModel } from '../model/foo/foo';

@Injectable()
export class FooService {
  async insertFoo() {
    Logger.debug('Saving a foo...');

    const bar = new BarModel({ fieldOne: 'fieldOne', fieldTwo: 'fieldTwo' } as Bar);

    return await FooModel.create({ bar: bar } as Foo);
  }
}
