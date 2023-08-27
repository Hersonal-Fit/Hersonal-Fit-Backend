import { ConnectionOptions } from 'typeorm';
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

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
  synchronize: true,
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  logging: true,
};

export = config;
