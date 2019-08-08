import {Controller, Put} from '@nestjs/common';
import {FooService} from './service/foo.service';
import {BarService} from './service/bar.service';

@Controller()
export class AppController {
  constructor(private readonly fooService: FooService, private readonly barService: BarService) {
  }

  @Put('/bar')
  async putBar() {
    return this.barService.insertBar();
  }

  @Put('/foo')
  async putFoo() {
    return this.fooService.insertFoo();
  }

}
