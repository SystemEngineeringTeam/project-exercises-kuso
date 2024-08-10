import { atom } from 'jotai';
import { loadable } from 'jotai/utils';
import { supabase } from '@/utils/supabase/client';

const fetchUser = async () => {
  const res = await supabase.from('z_user').select();
  return res.data;
};

export const userAtom = loadable(atom(async () => await fetchUser()));
