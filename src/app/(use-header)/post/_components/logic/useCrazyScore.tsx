import { useAtomValue } from 'jotai';
import { useState, useEffect } from 'react';
import { authAtom } from '@/stores/authAtom';
import upsertCrazyScore from '@/utils/upsertCrazyScore';

type CrazyScore = 0 | 1 | 2 | 3;

export const useCrazyScore = (postId: number) => {
  const auth = useAtomValue(authAtom);
  const [score, setScore] = useState<CrazyScore>();

  const setScore_ = (newScore: CrazyScore) => {
    setScore(newScore);
  };

  useEffect(() => {
    void (async () => {
      if (auth === undefined) return;
      if (score === undefined) return;

      await upsertCrazyScore({ post_id: postId, score, checked_user_uid: auth.uid });
    })();
  }, [score]);

  return [score, setScore_] as const;
};
