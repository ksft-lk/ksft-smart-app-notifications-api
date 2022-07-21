export enum NodeEnvironment {
  DEV = 'DEV',
  PRODUCTION = 'PRODUCTION',
}

export class EnvironmentConfig {
  PORT: string;
  NODE_ENV: NodeEnvironment;
  DATABASE_NAME: string;
  DATABASE_PASSWORD: string;
  AUTH_API_URL: string;
}
