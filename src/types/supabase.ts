import { User } from '@supabase/supabase-js';

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  updated_at: string;
}

export interface UserContextType {
  user: User | null;
  profile: Profile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, options?: { 
    data?: { full_name?: string },
    emailRedirectTo?: string 
  }) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string, options?: { redirectTo?: string }) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  loading: boolean;
} 