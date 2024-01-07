import { NamingStrategyInterface } from 'typeorm';

export interface IDatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  migrations: string[];
  namingStrategy: NamingStrategyInterface;
  autoLoadEntities: boolean;
  keepConnectionsAlive: boolean;
  logging?: boolean;
  timezone?: string;
  synchronize: boolean;
}
