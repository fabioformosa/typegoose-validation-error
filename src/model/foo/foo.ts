import { Typegoose, prop } from 'typegoose';
import Bar from './bar';
import * as mongoose from 'mongoose';

export default class Foo extends Typegoose {

  @prop()
  fieldOne : string;

  @prop({required:true, _id:false})
  bar : Bar;

}

export const FooModel = new Foo().getModelForClass(Foo, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'FooCollection' },
});
