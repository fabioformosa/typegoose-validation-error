import { Injectable, Logger } from '@nestjs/common';
import Bar from './model/one/bar';
import {InstanceType} from 'typegoose';
import Foo, { FooModel } from './model/foo';
import {BarService} from './bar.service';

@Injectable()
export class AppService {


  async insertFoo():Promise<InstanceType<Bar>>{
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
