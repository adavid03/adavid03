import { createClient } from '@supabase/supabase-js';
import { type Profile } from '@/types/supabase';

const supabaseUrl = 'https://db1.adavid03.com';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<{
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Profile>;
      };
    };
  };
}>(supabaseUrl, supabaseAnonKey); 