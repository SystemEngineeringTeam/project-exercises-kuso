import { atom } from 'jotai';
import { type PostTag, type Post, type User } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

interface ResPost {
  code: string;
  description: string;
  id: number;
  lang_id: number;
  title: string;
  user_uid: string;
  language: {
    id: number;
    name: string;
  } | null;
  user: User | null;
  post_tag: Array<{
    id: number;
    tag: string;
  }> | null;
  crazy_score: Array<{
    score: number;
  }> | null;
}

const fetchUser = async (): Promise<Post[]> => {
  const resPosts = await supabase.from('post').select(`
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
  `);

  if (resPosts.data === null) {
    throw new Error('Error fetching data');
  }

  return resPosts.data.map((resPost: ResPost) => {
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
    })) as PostTag[];

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
};

export const postAtom = atom(async () => await fetchUser());
