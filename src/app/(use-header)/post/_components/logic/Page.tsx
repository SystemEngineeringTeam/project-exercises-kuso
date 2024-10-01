import { useState } from 'react';
import Page from '../view/Page';
import { type PostLanguage, type PostTag } from '@/types/post';
import { type TablesInsert } from '@/types/supabase';

type Post = Partial<TablesInsert<'post'>>;

export default function PostPageLogic() {
  const [post, setPost] = useState<Post>({});
  const [tag, setTag] = useState<PostTag[]>();
  const [tagString, setTagString] = useState<string>('');
  const [languageString, setLanguageString] = useState<string>('');

  const languages = [{ id: 1, name: 'ts' }] satisfies PostLanguage[];

  // codeのセット
  function setCode(code: string) {
    setPost((prev) => ({ ...prev, code }));
  }

  // descriptionのセット
  function setDescription(description: string) {
    setPost((prev) => ({ ...prev, description }));
  }

  // lang_idのセット
  function setLangId(langId: number) {
    setPost((prev) => ({ ...prev, langId }));
  }

  // titleのセット
  function setTitle(title: string) {
    setPost((prev) => ({ ...prev, title }));
  }

  // user_uidのセット
  function setUserUid(userUid: string) {
    setPost((prev) => ({ ...prev, userUid }));
  }

  // tagsのセット
  function setTags(tags: PostTag[]) {
    setTag(tags);
  }

  // コンマ区切りのタグを配列に変換
  function changeToArray(tagStr: string) {
    const tags = tagStr.split(',');
    const postTags = tags.map((t) => ({ tag: t }));
    console.log(postTags); // eslint-disable-line no-console
  }

  // languageStringをidに変換
  function changeToId(languageStr: string) {
    const langId = Number(languageStr);
    setLangId(langId);

    // 言語のnameを取得
    const language = languages.find((lang) => lang.id === langId);
    console.log(language); // eslint-disable-line no-console
  }

  // 投稿処理
  function submit() {
    // タグの文字列を配列に変換
    changeToArray(tagString);

    // 言語の文字列をidに変換
    changeToId(languageString);

    // ここで投稿処理を行う
    console.log(post); // eslint-disable-line no-console
  }

  return (
    <Page
      language={languages}
      languageString={languageString}
      post={post}
      setCode={setCode}
      setDescription={setDescription}
      setLangId={setLangId}
      setLanguageString={setLanguageString}
      setTags={setTags}
      setTagString={setTagString}
      setTitle={setTitle}
      setUserUid={setUserUid}
      submit={submit}
      tag={tag}
      tagString={tagString}
    />
  );
}
