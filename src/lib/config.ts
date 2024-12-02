import { z } from 'zod';

export const envSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),
  FUEL_PROVIDER_URL: z.string(),
  FUEL_PAYMASTER_PRIVATE_KEY: z.string(),
  FUEL_FUNDER_PRIVATE_KEY: z.string(),
  MINIMUM_COIN_AMOUNT: z.string(),
  MINIMUM_COIN_VALUE: z.string(),
});

export type EnvConfig = z.infer<typeof envSchema>;
