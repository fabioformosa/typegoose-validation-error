import { prop, getModelForClass, modelOptions } from '@hasezoey/typegoose';
import Bar from './bar';
import Bar2 from './../bar2/bar';

@modelOptions({
  schemaOptions: { collection: 'FooCollection' },
})
export class Foo {
  @prop()
  fieldOne? : string;

  @prop({required:true, _id:false})
  bar! : Bar;

  @prop({required:true, _id:false})
  bar2! : Bar2;
}

export const FooModel = getModelForClass(Foo);
