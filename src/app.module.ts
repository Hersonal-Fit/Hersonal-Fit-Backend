import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { MainController } from './main/main.controller';
import { MainService } from './main/main.service';
import { MyPageController } from './my-page/my-page.controller';
import { MyPageService } from './my-page/my-page.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, QuestionController, MainController, MyPageController, UserController],
  providers: [AppService, QuestionService, MainService, MyPageService, UserService],
})
export class AppModule {}
