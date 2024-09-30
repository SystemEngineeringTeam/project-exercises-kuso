import { atom } from 'jotai';
import { type PostLanguage, type Post, type User, type PostTag } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

const fetchUser = async (): Promise<Post[]> => {
  const resPosts = await supabase.from('post').select();

  if (resPosts.data === null) {
    throw new Error('Error fetching data');
  }

  const res = await Promise.all(
    resPosts.data.map(
      async (resPost: {
        code: string;
        description: string;
        id: number;
        lang_id: number;
        title: string;
        user_uid: string;
      }) => {
        const resLangs = await supabase.from('language').select('id, name');
        const resPostTags = await supabase.from('post_tag').select('post_id, tag').eq('post_id', resPost.id);
        const resCrasyScores = await supabase.from('crazy_score').select('post_id, score').eq('post_id', resPost.id);
        const resUsers = await supabase.from('user').select().eq('uid', resPost.user_uid);

        if (
          resLangs.data === null ||
          resPostTags.data === null ||
          resCrasyScores.data === null ||
          resUsers.data === null
        ) {
          throw new Error('Error fetching data');
        }

        const language = resLangs.data.find(
          (resLang: { id: number }) => resLang.id === resPost.lang_id,
        ) as PostLanguage;

        const tags = resPostTags.data.filter(
          (resPostTag: { post_id: number }) => resPostTag.post_id === resPost.id,
        ) as PostTag[];

        const averageCrazyScore =
          resCrasyScores.data.reduce((acc: number, cur: { score: number }) => acc + cur.score, 0) /
          resCrasyScores.data.length;

        const user = resUsers.data.find((resUser: { uid: string }) => resUser.uid === resPost.user_uid) as User;

        return {
          id: resPost.id,
          code: resPost.code,
          description: resPost.description,
          title: resPost.title,
          crazy_score: averageCrazyScore,
          post_tags: tags,
          user,
          language,
        };
      },
    ),
  );

  return res;
};

export const postAtom = atom(async () => await fetchUser());
