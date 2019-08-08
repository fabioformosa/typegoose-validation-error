import {Controller, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {BarService} from './bar.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly barService: BarService) {
  }

  @Put('/bar')
  async putBar() {
    return this.barService.insertBar();
  }

  @Put('/foo')
  async putFoo() {
    return this.appService.insertFoo();
  }

}
