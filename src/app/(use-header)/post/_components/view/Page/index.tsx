'use client';

import { type Dispatch, type SetStateAction } from 'react';
import styles from './index.module.scss';
import { type PostLanguage, type PostTag } from '@/types/post';
import { type TablesInsert } from '@/types/supabase';

type Post = Partial<TablesInsert<'post'>>;
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
  languageString: string;
  setLanguageString: Dispatch<SetStateAction<string>>;
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
  languageString,
  setLanguageString,
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
              setLanguageString(e.target.value);
            }}
            value={languageString}
          >
            {/* ここにlanguageのIDを入れる,文字のところにはnameを入れる */}
            <option value="">言語を選択してください</option>
            {/* ここに言語の選択肢を追加していく */}
          </select>
        </div>
        <div className={styles.card}>
          <p>Tags</p>
          <input
            onChange={(e) => {
              setTagString(e.target.value);
            }}
            placeholder="タグを入力してください"
            type="text"
            value={tagString}
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
