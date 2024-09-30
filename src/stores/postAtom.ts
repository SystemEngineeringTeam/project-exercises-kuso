import { atom } from 'jotai';
import { type PostLanguage, type Post, type User, type PostTag } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

const fetchUser = async (): Promise<Post[]> => {
  const resPosts = await supabase.from('post').select();
  const resLangs = await supabase.from('language').select('id, name');
  const resPostTags = await supabase.from('post_tag').select('post_id, tag');
  const resCrasyScores = await supabase.from('crazy_score').select('post_id, score');
  const resUsers = await supabase.from('user').select();

  if (
    resPosts.status !== 200 ||
    resLangs.status !== 200 ||
    resPostTags.status !== 200 ||
    resCrasyScores.status !== 200 ||
    resUsers.status !== 200 ||
    resPosts.data === null ||
    resLangs.data === null ||
    resPostTags.data === null ||
    resCrasyScores.data === null ||
    resUsers.data === null
  ) {
    throw new Error('Error fetching data');
  }

  return resPosts.data.map(
    (resPost: { code: string; description: string; id: number; lang_id: number; title: string; user_uid: string }) => {
      const language = resLangs.data.find((resLang: { id: number }) => resLang.id === resPost.lang_id) as PostLanguage;

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
  );
};

export const postAtom = atom(async () => await fetchUser());
