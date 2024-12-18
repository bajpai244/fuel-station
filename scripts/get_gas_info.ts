import { Provider } from 'fuels';
import { envSchema } from '../src/lib';

const main = async () => {
  const ENV = envSchema.parse(process.env);
  const provider = await Provider.create(ENV.FUEL_PROVIDER_URL);

  const gasConfig = provider.getGasConfig();
  console.log('gasConfig', gasConfig);
};

main();