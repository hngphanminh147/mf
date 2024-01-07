import { join } from 'path';
import { DataSource } from 'typeorm';
import { DatabaseNamingStrategy } from '../src/modules/infra/database/naming.strategy';

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: parseInt(process.env.DATABASE_PORT) ?? 5432,
  username: process.env.DATABASE_USERNAME ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? '1',
  database: process.env.DATABASE_DATABASE ?? 'memefactory',
  entities: [join(__dirname, '../src/**/*.entity.ts')],
  migrations: [join(__dirname, 'scripts/*.ts')],
  logging: true,
  migrationsTransactionMode: 'all',
  namingStrategy: new DatabaseNamingStrategy(),
});
