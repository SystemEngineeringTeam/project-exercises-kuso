import { createServerClient } from '@supabase/ssr';
import { type ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function createClient() {
  const cookieStore = cookies();

  if (SUPABASE_URL === undefined) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
  if (SUPABASE_ANON_KEY === undefined) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            const cookieOption: ResponseCookie = {
              name,
              value,
              ...options,
            };
            return cookieStore.set(name, value, cookieOption);
          });
        } catch (e) {
          console.warn('Failed to set cookies', e);
        }
      },
    },
  });
}
