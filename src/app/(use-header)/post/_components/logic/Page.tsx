import { useState } from 'react';
import Page from '../view/Page';
import { TablesInsert } from '@/types/supabase';
import { PostLanguage, PostTag } from '@/types/post';

type Post = Partial<TablesInsert<'post'>>;

export default function PostPageLogic() {
  const [post, setPost] = useState<Post>({});
  const [tag, setTag] = useState<PostTag[]>();
  const [tagString, setTagString] = useState<string>('');
  const languages = [{ id: 1, name: 'ts' }] satisfies PostLanguage[];

  //codeのセット
  function setCode(code: string) {
    setPost((prev) => ({ ...prev, code }));
  }

  // descriptionのセット
  function setDescription(description: string) {
    setPost((prev) => ({ ...prev, description }));
  }

  // lang_idのセット
  function setLangId(lang_id: number) {
    setPost((prev) => ({ ...prev, lang_id }));
  }

  // titleのセット
  function setTitle(title: string) {
    setPost((prev) => ({ ...prev, title }));
  }

  // user_uidのセット
  function setUserUid(user_uid: string) {
    setPost((prev) => ({ ...prev, user_uid }));
  }

  // tagsのセット
  function setTags(tags: PostTag[]) {
    setTag(tags);
  }

  // コンマ区切りのタグを配列に変換
  function changeToArray(tagString: string) {
    const tags = tagString.split(',');
    const postTags = tags.map((tag) => ({ tag }));
    console.log(postTags); // eslint-disable-line no-console
  }

  // 投稿処理
  function submit() {
    // タグの文字列を配列に変換
    changeToArray(tagString);

    // ここで投稿処理を行う
    console.log(post); // eslint-disable-line no-console
  }

  return (
    <Page
      post={post}
      tag={tag}
      language={languages}
      setCode={setCode}
      setDescription={setDescription}
      setLangId={setLangId}
      setTitle={setTitle}
      setUserUid={setUserUid}
      setTags={setTags}
      submit={submit}
      tagString={tagString}
      setTagString={setTagString}
    />
  );
}
