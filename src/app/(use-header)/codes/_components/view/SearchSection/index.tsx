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

  return (
    <section className={styles.section}>
      <p>
        {searchWords.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </p>
      <input
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
    </section>
  );
}
