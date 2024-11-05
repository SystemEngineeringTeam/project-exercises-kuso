'use client';

import { useCallback } from 'react';
import styles from './Card.module.scss';
import { useCrazyScore } from '@/app/(use-header)/post/_components/logic/useCrazyScore';
import CodeArea from '@/components/CodeArea';
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
          <img
            alt="user_icon"
            src="https://img.esa.io/uploads/production/attachments/19973/2024/10/22/148910/a3ad87c4-103f-4a77-8de4-bb1c89b42a38.png"
          />
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
