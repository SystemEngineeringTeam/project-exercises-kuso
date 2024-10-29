import { supabase } from './supabase/client';
import type { Tables } from '@/types/supabase';

const upsertUser = async (name: string, uid: string): Promise<Tables<'user'> | undefined> => {
  const { data, error: userError } = await supabase.from('user').upsert({ name, uid }).select('*');
  if (userError !== null || data.length === 0) {
    console.error(userError);
    return undefined;
  }

  return data[0];
};

export default upsertUser;
