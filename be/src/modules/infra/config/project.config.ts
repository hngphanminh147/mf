import { IProjectConfig } from './interface/project-config.interface';

const initConfig = (): IProjectConfig => ({
  env: process.env.NODE_ENV ?? 'local',
  port: parseInt(process.env.APP_PORT ?? '3000', 10),
  context: process.env.APP_CONTEXT ?? 'app context',
  org: process.env.ORG ?? 'org',
  app: process.env.APP_NAME ?? 'meme factory',
});

export const defaultProjectConfig = (): { default: IProjectConfig } => ({ default: initConfig() });
