import { atom } from 'jotai';
import { supabase } from '@/utils/supabase';

const fetchUser = async () => {
  const res = await supabase.from('z_user').select();
  return res.data;
};

export const userAtom = atom(async () => await fetchUser());
