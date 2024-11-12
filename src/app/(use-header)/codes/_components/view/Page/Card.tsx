'use client';

import { useCallback } from 'react';
import styles from './Card.module.scss';
import { useCrazyScore } from '@/app/(use-header)/post/_components/logic/useCrazyScore';
import CodeArea from '@/components/CodeArea';
import RandomIcon from '@/components/RandomIcon';
import { type Post } from '@/types/post';

interface CardProps {
  post: Post;
}

const CRAZY_SCORE = [
  { text: 'クソだね', n: 3 },
  { text: 'よくないね', n: 2 },
  { text: 'ふーん', n: 1 },
  { text: 'へぇー', n: 0 },
] as const;

export function Card({ post }: CardProps) {
  const [score, setScore] = useCrazyScore(post.id);

  const handleCLick = useCallback((newScore: 0 | 1 | 2 | 3) => {
    setScore(newScore);
  }, []);

  return (
    <div key={post.id} className={styles.container}>
      <h1>{post.title}</h1>
      <div className={styles.tags}>
        {post.post_tags.map((tag) => (
          <p key={tag.id}>{tag.tag}</p>
        ))}
      </div>
      <p>{post.description}</p>
      <CodeArea code={post.code} language={post.language.name.toLowerCase()} />
      <div className={styles.userAndValue}>
        <div className={styles.user}>
          <div className={styles.icon}>
            <RandomIcon userName={post.user.name} />
          </div>
          <p>{post.user.name}</p>
        </div>
        <div className={styles.buttons}>
          {CRAZY_SCORE.map(({ text, n }) => (
            <button
              key={text}
              data-active={score === n}
              onClick={() => {
                handleCLick(n);
              }}
              type="button"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
