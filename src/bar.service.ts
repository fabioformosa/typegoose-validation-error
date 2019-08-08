import {Injectable} from '@nestjs/common';
import Bar, {BarModel} from './model/two/bar';
import {AppService} from './app.service';
import {InstanceType} from 'typegoose';

@Injectable()
export class BarService {

  // constructor(private readonly appService: AppService) {
  // }

  async insertBar(): Promise<InstanceType<Bar>> {
    const barTwo = new Bar();
    barTwo.fieldOne = 'pippo';
    barTwo.fieldThree = 'pino';
    const barModel = new BarModel(barTwo);
    return await barModel.save();
  }

  async getBar() {
    let bar = await this.insertBar();
    return await BarModel.findOne({_id: bar._id});
  }

}
