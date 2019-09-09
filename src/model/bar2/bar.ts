import {getModelForClass, modelOptions, prop} from '@hasezoey/typegoose';

@modelOptions({schemaOptions: {_id: false}, options:{customName: 'bar2'}})
export default class Bar {
  @prop({required: true})
  fieldOne!: string;

  @prop({required: true})
  fieldTwo!: string;

  @prop({required: true})
  fieldThree!: string;
}

// export const BarModel = getModelForClass(Bar);
