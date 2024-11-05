import { supabase } from './supabase/client';
import type { Tables, TablesInsert } from '@/types/supabase';

const insertCrazyScore = async (
  table: Omit<TablesInsert<'crazy_score'>, 'id' | 'created_at' | 'deleted_at'>,
): Promise<Tables<'crazy_score'> | undefined> => {
  const { data } = await supabase.from('crazy_score').upsert(table).select('*');

  if (data === null) {
    throw new Error('Error inserting data');
  }

  return data[0];
};

export default insertCrazyScore;
