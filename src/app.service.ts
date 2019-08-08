import { Injectable, Logger } from '@nestjs/common';
import Bar from './model/one/bar';
import {InstanceType} from 'typegoose';
import Foo, { FooModel } from './model/foo';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  async insertFoo(){
    Logger.debug('Saving a foo...');
    
    const bar = new Bar();
    bar.fieldOne = 'hello';
    bar.fieldTwo = 'world';

    const foo = new Foo();
    foo.bar = bar;


    const fooModel: InstanceType<Bar> = new FooModel(foo);
    return await fooModel.save();
  }

}
