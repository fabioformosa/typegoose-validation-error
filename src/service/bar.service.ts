import {Injectable} from '@nestjs/common';
import {Bar, BarModel} from '../model/bar/bar';

@Injectable()
export class BarService {
  async insertBar() {
    return await BarModel.create({ fieldOne: 'john', fieldThree: 'doe' } as Bar);
  }

  async getBar() {
    let bar = await this.insertBar();
    return await BarModel.findOne({_id: bar._id});
  }
}
