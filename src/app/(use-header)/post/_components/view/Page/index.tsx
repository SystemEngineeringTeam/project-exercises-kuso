'use client';

import { useState } from 'react';
import styles from './index.module.scss';

interface PageProps {
  post: {
    title: string;
    description: string;
    tags: string[];
    code: string;
  };
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setTags: (tags: string[]) => void;
  setCode: (code: string) => void;
  submit: () => void;
}

export default function Page({ post, setTitle, setDescription, setTags, setCode, submit }: PageProps) {
  const [title, _setTitle] = useState(''); // 本来は title, setTitle は引数から受け取る
  const [description, _setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [tag, _setTag] = useState('');
  const [code, _setCode] = useState('');

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>Title</p>
          <input placeholder="タイトルを入力してください" type="text" value={title} />
        </div>
        <div className={styles.card}>
          <p>Description</p>
          <input placeholder="説明を入力してください" type="text" value={description} />
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
            <option value="">言語を選択してください</option>
            {/* ここに言語の選択肢を追加していく */}
          </select>
        </div>
        <div className={styles.card}>
          <p>Tags</p>
          <input placeholder="タグを入力してください" type="text" value={tag} />
        </div>
      </div>
      <div className={styles.codeArea}>
        <p>Kuso Code</p>
        <textarea name="code">{code}</textarea>
      </div>
    </div>
  );
}
