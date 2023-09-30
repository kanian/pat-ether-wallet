import { EnvFiles } from './EnvFiles';
import { Envs } from './Envs';
import { config } from 'dotenv';

/**
 * Load the proper environment file based on passed environment discriminator
 * @param envDiscriminator ex: 'NODE_ENV'. Defaults to 'ENV'.
 */
export function loadEnv(envDiscriminator = 'ENV') {
  const disc = process.env[envDiscriminator];
  const ENV = disc ? (disc as Envs) : Envs.DEVELOPMENT;
  config({
    path: EnvFiles[ENV],
  });
}
