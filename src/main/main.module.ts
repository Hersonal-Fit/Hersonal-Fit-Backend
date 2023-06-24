import { MainController } from './main.controller';
import { Module } from '@nestjs/common';
import { MainService } from './main.service';

@Module({
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
