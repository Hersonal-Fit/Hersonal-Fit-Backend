import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';
import { MyPageModule } from './my-page/my-page.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Users } from './entities/Users.entity';
import { Comments } from './entities/Comments.entity';
import { Communities } from './entities/Communities.entity';
import { Files } from './entities/Files.entity';
import { FitnessAchieve } from './entities/FitnessAchieve.entity';
import { FitnessCodes } from './entities/FitnessCodes.entity';
import { HealthTags } from './entities/HealthTags.entity';
import { Likes } from './entities/Likes.entity';
import { Rates } from './entities/Rates.entity';
import { Reports } from './entities/Reports.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST'),
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USERNAME'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        database: configService.get<string>('MYSQL_DATABASE'),
        entities: [
          Users,
          Comments,
          Communities,
          Files,
          FitnessAchieve,
          FitnessCodes,
          HealthTags,
          Likes,
          Rates,
          Reports,
        ],
        synchronize: false,
      }),
    }),
    MainModule,
    MyPageModule,
    QuestionModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
