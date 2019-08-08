import {Injectable} from '@nestjs/common';
import Bar, {BarModel} from './model/two/bar';

@Injectable()
export class BarService {

  async insertBar(){
    const barTwo = new Bar();
    barTwo.fieldOne = 'pippo';
    barTwo.fieldTwo = 'gino';
    barTwo.fieldThree = 'pino';
    const barModel = new BarModel(barTwo);
    return await barModel.save();
  }

}
