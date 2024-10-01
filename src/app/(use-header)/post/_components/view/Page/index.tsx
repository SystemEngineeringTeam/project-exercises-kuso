'use client';

import { PostLanguage, PostTag } from '@/types/post';
import { TablesInsert } from '@/types/supabase';
import styles from './index.module.scss';
import { Dispatch, SetStateAction } from 'react';

type Post = Partial<TablesInsert<'post'>>;
type tag = { tags: string[] };
interface PageProps {
  post: Post;
  tag: PostTag[] | undefined;
  language: PostLanguage[];
  setCode: (code: string) => void;
  setDescription: (description: string) => void;
  setLangId: (lang_id: number) => void;
  setTitle: (title: string) => void;
  setUserUid: (user_uid: string) => void;
  setTags: (tags: PostTag[]) => void;
  submit: () => void;
  tagString: string;
  setTagString: Dispatch<SetStateAction<string>>;
}

export default function Page({
  post,
  tag,
  language,
  setCode,
  setDescription,
  setLangId,
  setTitle,
  setUserUid,
  setTags,
  submit,
  tagString,
  setTagString,
}: PageProps) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>Title</p>
          <input placeholder="タイトルを入力してください" type="text" value={post.title} />
        </div>
        <div className={styles.card}>
          <p>Description</p>
          <input placeholder="説明を入力してください" type="text" value={post.description} />
        </div>
        <div className={styles.card}>
          <p>Language</p>
          <select
            name="languages"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            value={language}
          >
            {/* ここにlanguageのIDを入れる,文字のところにはnameを入れる */}
            <option value="">言語を選択してください</option>
            {/* ここに言語の選択肢を追加していく */}
          </select>
        </div>
        <div className={styles.card}>
          <p>Tags</p>
          <input
            placeholder="タグを入力してください"
            type="text"
            value={tagString}
            onChange={(e) => {
              setTagString(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.codeArea}>
        <p>Kuso Code</p>
        <textarea name="code">{post.code}</textarea>
      </div>
    </div>
  );
}
