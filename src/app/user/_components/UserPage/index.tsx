'use client';

import { useAtom } from 'jotai';
import UserCard from '../UserCard';
import { userAtom } from '@/stores/userAtom';

export default function UserPage() {
  const [user, setUser] = useAtom(userAtom);

  // const user = {
  //   id: 1,
  //   uid: '10000000-0000-0000-0000-000000000000',
  //   created_at: '2024-08-09 09:31:35.113094+00',
  //   name: '佐藤',
  // };

  return (
    <>
      {user.state === 'loading' && <p>Loading...</p>}
      {user.state === 'hasError' && <p>Error</p>}

      {user.state === 'hasData' &&
        user.data?.map((u) => (
          <UserCard key={u.uid} created_at={new Date(u.created_at)} id={u.id} name={u.name} uid={u.uid} />
        ))}
    </>
  );
}
