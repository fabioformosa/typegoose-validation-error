import { prop, getModelForClass, modelOptions } from '@hasezoey/typegoose';

@modelOptions({
  schemaOptions: { collection: 'BarCollection' },
})
export class Bar {
  @prop({required : true})
  fieldOne!: string;
  
  @prop()
  fieldTwo? : string;

  @prop({required : true})
  fieldThree!: string;
}

export const BarModel = getModelForClass(Bar);
