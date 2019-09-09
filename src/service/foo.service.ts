import { Injectable, Inject } from '@nestjs/common';
import Bar from '../model/foo/bar';
import Bar2 from '../model/bar2/bar';
import { Foo, FooModel } from '../model/foo/foo';
import { BarService } from './bar.service';

@Injectable()
export class FooService {

  constructor(@Inject('BarService') private barService: BarService){
    console.log('creating foo service...');
  }

  async insertFoo() {
    console.log('Saving a foo...');

   // const bar = new BarModel({ fieldOne: 'fieldOne', fieldTwo: 'fieldTwo' } as Bar);
   // const bar2 = new BarModel2({ fieldOne: 'fieldOne', fieldTwo: 'fieldTwo', fieldThree: 'fieldThree' } as Bar2);

    const bar = new Bar();
    bar.fieldOne = 'fieldOne';
    bar.fieldTwo = 'fieldTwo';

    const bar2 = new Bar2();
    bar2.fieldOne = 'fieldOne';
    bar2.fieldTwo = 'fieldTwo';
    bar2.fieldThree = 'fieldThree';

   return await FooModel.create({ bar: bar, bar2: bar2 } as Foo);

  //  const bar = new Bar();
  //   bar.fieldOne = 'fieldOne';
  //   bar.fieldTwo = 'fieldTwo';

  //   const foo = new Foo();
  //   foo.bar = bar;

  //   const fooModel = new FooModel(foo);
  //   return await fooModel.save();
  }

  async retrieveById(fooId): Promise<Foo>{
    return FooModel.findById(fooId);
  }
}
