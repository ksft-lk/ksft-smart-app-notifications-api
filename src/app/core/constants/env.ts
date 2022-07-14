import {NodeEnvironment} from '../../shared/models/core';

const env = process.env;

export const PORT = env.PORT || 3000;
export const NODE_ENV: NodeEnvironment = (env.NODE_ENV as NodeEnvironment) || NodeEnvironment.DEV;
