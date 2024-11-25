'use client';

import { useAtom } from 'jotai';
import { type KeyboardEvent, type ChangeEvent, useState } from 'react';
import styles from './index.module.scss';
import { searchTagWordsAtom } from '@/stores/postListAtom';

export default function SearchSection() {
  const [searchWords, setSearchWords] = useAtom(searchTagWordsAtom);
  const [value, setValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const onReturnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (isComposing) return;

    setSearchWords([...searchWords, value]);
    setValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const deleteWord = (index: number) => {
    setSearchWords(searchWords.filter((_, i) => i !== index));
  };

  return (
    <section className={styles.section}>
      <h3>キーワード検索</h3>

      <label className={styles.keywords} htmlFor="keywords">
        {searchWords.map((w, i) => (
          <button
            key={w}
            onClick={() => {
              deleteWord(i);
            }}
            type="button"
          >
            {w}
          </button>
        ))}
        <input
          id="keywords"
          onChange={onChange}
          onCompositionEnd={() => {
            setIsComposing(false);
          }}
          onCompositionStart={() => {
            setIsComposing(true);
          }}
          onKeyDown={onReturnKeyDown}
          type="text"
          value={value}
        />
      </label>
    </section>
  );
}
