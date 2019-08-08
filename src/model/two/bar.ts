import { prop, Typegoose } from 'typegoose';
import * as mongoose from 'mongoose';

export default class Bar extends Typegoose {

  @prop({required : true})
  fieldThree: string;

  @prop({required : true})
  fieldOne: string;
  
  @prop({required : true})
  fieldTwo : string;

}

export const BarModel = new Bar().getModelForClass(Bar, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'BarCollection' },
});
