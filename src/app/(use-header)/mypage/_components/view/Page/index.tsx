'use client';

import { useAtomValue } from 'jotai';
import styles from './index.module.scss';
import CodeArea from '@/components/CodeArea';
import { userPostListAtom } from '@/stores/userPostListAtom';

export default function Page() {
  const posts = useAtomValue(userPostListAtom);

  return (
    <div className={styles.containers}>
      {posts.length === 0 && <p>まだ投稿していません!</p>}

      {posts.map((post) => (
        <div key={post.id} className={styles.container}>
          <h1>{post.title}</h1>
          <div className={styles.tags}>
            {post.post_tags.map((tag) => (
              <p key={tag.id}>{tag.tag}</p>
            ))}
          </div>
          <p>{post.description}</p>
          <details>
            <summary>Code</summary>
            <CodeArea code={post.code} language={post.language.name.toLowerCase()} />
          </details>
          <div className={styles.score_box}>
            <div className={styles.kuso_box}>
              <img alt="unko" src="unko.svg" style={{ ['--score' as string]: `${post.crazy_score * 20}%` }} />
              <img alt="unko" src="unko.svg" />
            </div>
            <p>{Number.isNaN(post.crazy_score) ? '評価がありません' : post.crazy_score.toFixed(1)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
