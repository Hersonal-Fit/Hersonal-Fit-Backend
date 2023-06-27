import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
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

const configService = new ConfigService();

const mysqlDataSource = new DataSource({
  type: 'mysql',
  host: configService.get<string>('MYSQL_HOST'),
  port: 3306,
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
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
});

export default mysqlDataSource;
