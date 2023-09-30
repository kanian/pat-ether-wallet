import { EnvFileNames } from './EnvFileNames';
import { Envs } from './Envs';

export const EnvFiles: Record<Envs, EnvFileNames> = {
  [Envs.PRODUCTION]: EnvFileNames.PRODUCTION,
  [Envs.DEBUGGING]: EnvFileNames.DEBUGGING,
  [Envs.DEVELOPMENT]: EnvFileNames.DEVELOPMENT,
  [Envs.TESTING]: EnvFileNames.TESTING,
};
