import { atom } from 'jotai';
import type { Post } from '@/types/post';
import { supabase } from '@/utils/supabase/client';

const fetchALlPostList = async (): Promise<Post[]> => {
  const resPostList = await supabase.from('post').select(`
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

  if (resPostList.data === null) {
    throw new Error('Error fetching data');
  }

  const averageCrazyScores: Array<{
    post_id: number;
    score: number;
  }> = resPostList.data.map((post) => {
    const sumScore = post.crazy_score.reduce((prev, current) => prev + current.score, 0);
    const averageScore = sumScore / post.crazy_score.length;
    return {
      post_id: post.id,
      score: averageScore,
    };
  });

  return resPostList.data.map((resPost) => {
    if (
      resPost.language === null ||
      resPost.user === null ||
      resPost.post_tag === null ||
      resPost.crazy_score === null
    ) {
      throw new Error('Error fetching data');
    }

    const postTags = resPost.post_tag.map((tag) => ({
      ...tag,
      post_id: resPost.id,
    }));

    const averageCrazyScore = averageCrazyScores.find((score) => score.post_id === resPost.id)?.score;
    if (averageCrazyScore === undefined) {
      throw new Error('Error averaging score is undefined');
    }

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

const fetchPostListByTag = async (searchWords: string[]): Promise<Post[]> => {
  const orFilterByTag = searchWords.map((term) => `tag.ilike.%${term}%`).join(',');
  const matchTagPostIds = await supabase.from('post_tag').select('post_id').or(orFilterByTag);

  if (matchTagPostIds.data === null || matchTagPostIds.data.length === 0) {
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

  const averageCrazyScores: Array<{
    post_id: number;
    score: number;
  }> = resPostList.data.map((post) => {
    const sumScore = post.crazy_score.reduce((prev, current) => prev + current.score, 0);
    const averageScore = sumScore / post.crazy_score.length;
    return {
      post_id: post.id,
      score: averageScore,
    };
  });

  return resPostList.data.map((resPost) => {
    if (
      resPost.language === null ||
      resPost.user === null ||
      resPost.post_tag === null ||
      resPost.crazy_score === null
    ) {
      throw new Error('Error fetching data');
    }

    const averageCrazyScore = averageCrazyScores.find((score) => score.post_id === resPost.id)?.score;
    if (averageCrazyScore === undefined) {
      throw new Error('Error averaging score is undefined');
    }

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
};

async function fetchPostList(searchWords: string[]): Promise<Post[]> {
  if (searchWords.length === 0) return await fetchALlPostList();
  return await fetchPostListByTag(searchWords);
}

export const searchTagWordsAtom = atom<string[]>([]);

export const postListAtom = atom(async (get) => {
  const searchTagWords = get(searchTagWordsAtom);

  return await fetchPostList(searchTagWords);
});
