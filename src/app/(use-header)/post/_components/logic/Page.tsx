'use client';

import { useAtomValue } from 'jotai';
import { useState } from 'react';
import Page from '../view/Page';
import { authAtom } from '@/stores/authAtom';
import { langAtom } from '@/stores/langAtom';
import { type TablesInsert } from '@/types/supabase';
import insertPost from '@/utils/insertPost';

type Post = Partial<TablesInsert<'post'>>;

export default function PostPageLogic() {
  const [post, setPost] = useState<Post>({});
  const [tagString, setTagString] = useState<string>('');
  const [languageString, setLanguageString] = useState<string>('');

  const auth = useAtomValue(authAtom);
  const languages = useAtomValue(langAtom);

  function setCode(code: string) {
    setPost((prev) => ({ ...prev, code }));
  }

  function setDescription(description: string) {
    setPost((prev) => ({ ...prev, description }));
  }

  function setTitle(title: string) {
    setPost((prev) => ({ ...prev, title }));
  }

  function changeToArray(tagStr: string) {
    const tags = tagStr.split(',');
    return tags;
  }

  function changeToId(languageStr: string): number | undefined {
    const langId = Number(languageStr);

    // idが存在するか確認
    if (!languages.some((lang) => lang.id === langId)) {
      return undefined;
    }

    // 言語のnameを取得
    const langage = languages.find((lang) => lang.id === langId);
    return langage?.id;
  }

  // 投稿処理
  function submit() {
    const tags = changeToArray(tagString);
    const languageId = changeToId(languageString);

    if (auth === undefined) {
      alert('ログインしてください');
      return;
    }

    if (languageId === undefined) {
      alert('言語を選択してください');
      return;
    }

    if (post.code === undefined) {
      alert('コードを入力してください');
      return;
    }

    if (post.description === undefined) {
      alert('説明を入力してください');
      return;
    }

    if (post.title === undefined) {
      alert('タイトルを入力してください');
      return;
    }

    const p: Omit<TablesInsert<'post'>, 'id' | 'created_at' | 'deleted_at'> = {
      code: post.code,
      description: post.description,
      lang_id: languageId,
      title: post.title,
      user_uid: auth.uid,
    };
    void (async () => {
      const res = await insertPost(p, tags);

      if (res === undefined) {
        alert('投稿に失敗しました');
      }
    })();
  }

  return (
    <Page
      language={languages}
      post={post}
      setCode={setCode}
      setDescription={setDescription}
      setLanguageString={setLanguageString}
      setTagString={setTagString}
      setTitle={setTitle}
      submit={submit}
      tagString={tagString}
    />
  );
}
