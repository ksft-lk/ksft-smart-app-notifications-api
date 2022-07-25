import {NodeEnvironment} from '@shared/models/env/node-environment.model';

export class EnvironmentConfig {
  PORT: string;
  NODE_ENV: NodeEnvironment;
  DATABASE_NAME: string;
  DATABASE_PASSWORD: string;
  AUTH_API_URL: string;
  GRAPH_CLIENT_ID: string;
  GRAPH_CLIENT_SECRET: string;
  GRAPH_TENANT_ID: string;
  GRAPH_CLIENT_SENDER: string;
}
