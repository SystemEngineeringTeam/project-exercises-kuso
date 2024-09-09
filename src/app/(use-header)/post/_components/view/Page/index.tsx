'use client';
import { useState } from 'react';
import styles from './index.module.scss';

export default function Page() {
  const [title, setTitle] = useState(''); // 本来は title, setTitle は引数から受け取る
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [tag, setTag] = useState('');
  const [code, setCode] = useState('');

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>Title</p>
          <input type="text" value={title} placeholder="タイトルを入力してください"></input>
        </div>
        <div className={styles.card}>
          <p>Description</p>
          <input type="text" value={description} placeholder="説明を入力してください"></input>
        </div>
        <div className={styles.card}>
          <p>Language</p>
          <select name="languages" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="">言語を選択してください</option>
            {/* ここに言語の選択肢を追加していく */}
          </select>
        </div>
        <div className={styles.card}>
          <p>Tags</p>
          <input type="text" value={tag} placeholder="タグを入力してください"></input>
        </div>
      </div>
      <div className={styles.codeArea}>
        <p>Kuso Code</p>
        <textarea name="code">{code}</textarea>
      </div>
    </div>
  );
}
