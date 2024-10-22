import { supabase } from './supabase/client';
import type { Tables, TablesInsert } from '@/types/supabase';

const insertPost = async (
  table: Omit<TablesInsert<'post'>, 'id' | 'created_at' | 'deleted_at'>,
  tags: string[],
): Promise<Tables<'post'> | undefined> => {
  const { data, error: postError } = await supabase.from('post').insert(table).select('*');
  if (postError !== null) {
    return undefined;
  }

  const { error: tagError } = await supabase.from('post_tag').insert(tags.map((tag) => ({ post_id: data[0].id, tag })));
  if (tagError !== null) {
    return undefined;
  }

  return data[0];
};

export default insertPost;
