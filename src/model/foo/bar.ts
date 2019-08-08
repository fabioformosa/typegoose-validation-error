import {prop} from 'typegoose';

export default class Bar {

  @prop({required: true})
  fieldOne: string;

  @prop({required : true})
  fieldTwo : string;

}
