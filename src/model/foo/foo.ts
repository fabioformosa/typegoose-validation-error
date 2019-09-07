import { prop, getModelForClass, modelOptions } from '@hasezoey/typegoose';
import Bar from './bar';

@modelOptions({
  schemaOptions: { collection: 'FooCollection' },
})
export class Foo {
  @prop()
  fieldOne? : string;

  @prop({required:true, _id:false})
  bar! : Bar;
}

export const FooModel = getModelForClass(Foo);
