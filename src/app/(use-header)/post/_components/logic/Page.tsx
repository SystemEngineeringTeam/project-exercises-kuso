'use client';

import { useAtomValue } from 'jotai';
import { useState } from 'react';
import Page from '../view/Page';
import { langAtom } from '@/stores/langAtom';
import { type TablesInsert } from '@/types/supabase';

type Post = Partial<TablesInsert<'post'>>;

export default function PostPageLogic() {
  const [post, setPost] = useState<Post>({});
  const [tagString, setTagString] = useState<string>('');
  const [languageString, setLanguageString] = useState<string>('');

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
    if (languageString === '') {
      alert('言語を選択してください');
      return;
    }
    const languageId = changeToId(languageString);
    console.log(post, tags, languageId); // eslint-disable-line no-console
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
