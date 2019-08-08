import { Typegoose, prop } from 'typegoose';
import Bar from './one/bar';
import * as mongoose from 'mongoose';

export default class Foo extends Typegoose {

  @prop()
  a : string;

  @prop({required:true, _id:false})
  bar : Bar;

}

export const FooModel = new Foo().getModelForClass(Foo, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'FooCollection' },
});
