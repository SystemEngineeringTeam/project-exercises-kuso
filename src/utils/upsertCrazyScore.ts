import { supabase } from './supabase/client';
import type { Tables, TablesInsert } from '@/types/supabase';

const upsertCrazyScore = async (
  table: Omit<TablesInsert<'crazy_score'>, 'id' | 'created_at' | 'deleted_at'>,
): Promise<Tables<'crazy_score'> | undefined> => {
  const { data, error } = await supabase.from('crazy_score').upsert(table).select('*');

  if (error !== null) {
    throw new Error(error.message);
  }
  if (data === null) {
    throw new Error('Error return data is null');
  }
  if (data.length === 0) {
    throw new Error('Error return data length is 0');
  }

  return data[0];
};

export default upsertCrazyScore;
