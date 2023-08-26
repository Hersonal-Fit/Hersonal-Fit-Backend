import { MainService } from './main.service';
import { Controller, Get, Headers, Param } from '@nestjs/common';

@Controller('main')
export class MainController {
  MainService: any;
  constructor(private readonly mainService: MainService) {}

  @Get()
  async getMainPage(@Headers('email') email: string) {
    const myRoutine = this.mainService.getMainPage(email);
    return myRoutine;
  }
}
