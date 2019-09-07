import {prop, getModelForClass, modelOptions} from '@hasezoey/typegoose';

@modelOptions({ schemaOptions: { _id: false } })
export default class Bar {
  @prop({required: true})
  fieldOne!: string;

  @prop({required : true})
  fieldTwo! : string;
}

export const BarModel = getModelForClass(Bar);
