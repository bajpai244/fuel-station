import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../types/database.types';

// TODO: We need to create a DB intefrace which SupabaseDB will implement
export class SupabaseDB {
  constructor(private supabaseClient: SupabaseClient<Database>) {}

  async getTotalCoinsCount(): Promise<number> {
    const { count, error } = await this.supabaseClient
      .from('coins')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw error;
    }

    return count ?? 0;
  }
}
