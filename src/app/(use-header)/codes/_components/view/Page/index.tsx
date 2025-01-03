'use client';

import { useAtomValue } from 'jotai';
import SearchSection from '../SearchSection';
import { Card } from './Card';
import styles from './index.module.scss';
import { postListAtom } from '@/stores/postListAtom';

export default function Page() {
  const articles = useAtomValue(postListAtom);

  return (
    <div className={styles.containers}>
      <SearchSection />

      <div className={styles.posts}>
        {articles.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
