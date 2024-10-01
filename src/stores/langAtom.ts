import { atom } from 'jotai';
import { type PostLanguage } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

const fetchLang = async (): Promise<PostLanguage[]> => {
  const resLang = await supabase.from('language').select();

  if (resLang.data === null) {
    throw new Error('Error fetching data');
  }

  return resLang.data;
};

export const langAtom = atom(async () => await fetchLang());
