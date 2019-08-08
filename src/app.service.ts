import { Injectable, Logger } from '@nestjs/common';
import Bar from './model/one/bar';
import {InstanceType} from 'typegoose';
import Foo, { FooModel } from './model/foo';
import {BarService} from './bar.service';

@Injectable()
export class AppService {

  constructor(private readonly barService: BarService) {

  }

  async insertFoo(){
    Logger.debug('Saving a foo...');


    const retrievedBar = await this.barService.getBar();

    const bar = new Bar();
    bar.fieldOne = retrievedBar.fieldOne;
    bar.fieldTwo = retrievedBar.fieldTwo;

    const foo = new Foo();
    foo.bar = bar;


    const fooModel: InstanceType<Foo> = new FooModel(foo);
    return await fooModel.save();
  }

}
