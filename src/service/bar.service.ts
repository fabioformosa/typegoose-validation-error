import {Injectable} from '@nestjs/common';
import Bar, {BarModel} from '../model/bar/bar';
import {InstanceType} from 'typegoose';

@Injectable()
export class BarService {

  async insertBar(): Promise<InstanceType<Bar>> {
    const bar = new Bar();
    bar.fieldOne = 'john';
    bar.fieldThree = 'doe';
    const barModel = new BarModel(bar);
    return await barModel.save();
  }

  async getBar() {
    let bar = await this.insertBar();
    return await BarModel.findOne({_id: bar._id});
  }

}
