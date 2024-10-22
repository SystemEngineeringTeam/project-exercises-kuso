import { atom } from 'jotai';
import type { Post } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

async function searchPosts(searchWords: string[]): Promise<Post[]> {
  if (searchWords.length === 0) {
    return [];
  }

  const orFilterByTag = searchWords.map((term) => `tag.ilike.%${term}%`).join(',');
  const matchTagPostIds = await supabase.from('post_tag').select('post_id').or(orFilterByTag);

  if (matchTagPostIds.data === null) {
    return [];
  }

  const orFilterByTagId = matchTagPostIds.data?.map((matchTagPostId) => `id.eq.${matchTagPostId.post_id}`).join(',');

  const resPostList = await supabase
    .from('post')
    .select(
      `
    *,
    language (
      id,
      name
    ),
    user (
      id,
      uid,
      name
    ),
    post_tag (
      id,
      tag
    ),
    crazy_score (
      score
    )
  `,
    )
    .or(orFilterByTagId);

  if (resPostList.data === null) {
    throw new Error('Error fetching data');
  }

  return resPostList.data.map((resPost) => {
    if (
      resPost.language === null ||
      resPost.user === null ||
      resPost.post_tag === null ||
      resPost.crazy_score === null
    ) {
      throw new Error('Error fetching data');
    }

    const averageCrazyScore =
      resPost.crazy_score.reduce((acc: number, cur: { score: number }) => acc + cur.score, 0) /
      resPost.crazy_score.length;

    const postTags = resPost.post_tag.map((tag) => ({
      ...tag,
      post_id: resPost.id,
    }));

    return {
      id: resPost.id,
      code: resPost.code,
      description: resPost.description,
      title: resPost.title,
      crazy_score: averageCrazyScore,
      post_tags: postTags,
      user: resPost.user,
      language: resPost.language,
    };
  });
}

export const searchTagWordsAtom = atom<string[]>([]);

export const searchResultAtom = atom(async (get) => {
  const searchTagWords = get(searchTagWordsAtom);

  return await searchPosts(searchTagWords);
});
