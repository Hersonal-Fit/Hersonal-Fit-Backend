import { MainService } from './main.service';
import { Controller, Get } from '@nestjs/common';

@Controller('main')
export class MainController {
  MainService: any;
  constructor(private readonly mainService: MainService) {}

  // @Get()
  // async getMain
}
