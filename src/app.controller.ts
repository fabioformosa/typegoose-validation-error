import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import Bar, { BarModel } from './model/two/bar';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ciao')
  async getCiao(){
    const barTwo = new Bar();
    barTwo.fieldOne = 'pippo';
    barTwo.fieldTwo = 'gino';
    barTwo.fieldThree = 'pino';
    const barModel = new BarModel(barTwo);
    await barModel.save();
  }

  @Get('/hello')
  async getHello() {
    Logger.debug('Opening in controller...');
    // return this.appService.getHello();
    return this.appService.insertFoo();
  }


}
