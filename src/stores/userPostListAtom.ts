import { atom } from 'jotai';
import { authAtom } from './authAtom';
import { type Post } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

async function fetchUserPostList(userUid: string): Promise<Post[]> {
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
    .eq('user_uid', userUid);

  if (resPostList.data === null) {
    return [];
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

export const userPostListAtom = atom(async (get) => {
  const auth = get(authAtom);
  if (auth === undefined) {
    return [];
  }

  return await fetchUserPostList(auth.uid);
});
