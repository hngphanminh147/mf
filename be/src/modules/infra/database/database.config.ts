import { resolve } from 'path';
import { DatabaseNamingStrategy } from './naming.strategy';
import { IDatabaseConfig } from './interface';

const initConfig = (): IDatabaseConfig => ({
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: parseInt(process.env.DATABASE_PORT) ?? 5432,
  username: process.env.DATABASE_USERNAME ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? '1',
  database: process.env.DATABASE_DATABASE ?? 'memefactory',
  entities: [resolve(__dirname, '**/*.entity.ts')],
  migrations: [],
  namingStrategy: new DatabaseNamingStrategy(),
  autoLoadEntities: true,
  keepConnectionsAlive: true,
  logging: process.env.DATABASE_LOGGING === 'true',
  timezone: 'Z',
  synchronize: false,
});

export const databaseConfig = (): { database: IDatabaseConfig } => ({ database: initConfig() });
