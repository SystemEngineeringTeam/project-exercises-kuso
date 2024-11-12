import { createClient } from '@supabase/supabase-js';

const { SEED_SUPABASE_URL, SEED_SERVICE_ROLE_KEY } = process.env;

if (SEED_SUPABASE_URL === undefined) throw new Error('SEED_SUPABASE_URL is not defined');
if (SEED_SERVICE_ROLE_KEY === undefined) throw new Error('SEED_SERVICE_ROLE_KEY is not defined');

const supabase = createClient(SEED_SUPABASE_URL, SEED_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const adminAuthClient = supabase.auth.admin;
