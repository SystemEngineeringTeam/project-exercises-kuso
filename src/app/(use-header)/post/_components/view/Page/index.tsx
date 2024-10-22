'use client';

import { type Dispatch, type SetStateAction } from 'react';
import styles from './index.module.scss';
import { type PostLanguage } from '@/types/post';
import { type TablesInsert } from '@/types/supabase';

type Post = Partial<TablesInsert<'post'>>;
interface PageProps {
  post: Post;
  language: PostLanguage[];
  setCode: (code: string) => void;
  setDescription: (description: string) => void;
  setLangId: (lang_id: number) => void;
  setTitle: (title: string) => void;
  setUserUid: (user_uid: string) => void;
  submit: () => void;
  tagString: string;
  setTagString: Dispatch<SetStateAction<string>>;
  languageString: string;
  setLanguageString: Dispatch<SetStateAction<string>>;
}

export default function Page({
  post,
  language,
  setCode,
  setDescription,
  setLangId,
  setTitle,
  setUserUid,
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
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="タイトルを入力してください"
            type="text"
            value={post.title}
          />
        </div>
        <div className={styles.card}>
          <p>Description</p>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="説明を入力してください"
            type="text"
            value={post.description}
          />
        </div>
        <div className={styles.card}>
          <p>Language</p>
          <select
            name="languages"
            onChange={(e) => {
              setLanguageString(e.target.value);
              setLangId(Number(e.target.value));
            }}
            value={languageString}
          >
            {/* ここにlanguageのIDを入れる,文字のところにはnameを入れる */}
            <option value="">言語を選択してください</option>
            {/* ここに言語の選択肢を追加していく */}
            {language.map((lang) => (
              <option key={lang.id} value={String(lang.id)}>
                {lang.name}
              </option>
            ))}
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
        <textarea id="codeText" name="code">
          {post.code}{' '}
        </textarea>

        {/* textAreaの値をセット */}
        <button
          onClick={() => {
            const element = document.getElementById('codeText') as HTMLTextAreaElement;
            if (element !== null) {
              setCode(element.value);
            }
            setUserUid('test');
            submit();
          }}
          type="button"
        >
          投稿
        </button>
      </div>
    </div>
  );
}
