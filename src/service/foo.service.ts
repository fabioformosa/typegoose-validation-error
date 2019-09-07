import { Injectable, Inject } from '@nestjs/common';
import Bar, { BarModel } from '../model/foo/bar';
import { Foo, FooModel } from '../model/foo/foo';
import { BarService } from './bar.service';
import { decoratorCache } from '@hasezoey/typegoose/lib/internal/data';

@Injectable()
export class FooService {

  constructor(@Inject('BarService') private barService: BarService){
    console.log('creating foo service...');
  }

  async insertFoo() {
    console.log('Saving a foo...');

   const bar = new BarModel({ fieldOne: 'fieldOne', fieldTwo: 'fieldTwo' } as Bar);
    console.log('schema', decoratorCache);

   return await FooModel.create({ bar: bar } as Foo);

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
