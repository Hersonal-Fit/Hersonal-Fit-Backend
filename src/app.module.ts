import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';
import { MyPageModule } from './my-page/my-page.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'dabeenkim',
    //   password: 'password',
    //   database: 'database',
    //   entities: [__dirname + '/**/*.entity{.ts}'],
    //   synchronize: true,
    // }),
    MainModule,
    MyPageModule,
    QuestionModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
