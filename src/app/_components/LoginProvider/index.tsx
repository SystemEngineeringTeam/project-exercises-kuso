'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { type ChangeEvent, type FormEvent, type ReactElement, useState, useSyncExternalStore } from 'react';
import styles from './index.module.scss';
import { authAtom } from '@/stores/authAtom';
import { supabase } from '@/utils/supabase/client';
import upsertUser from '@/utils/upsertUser';

interface Props {
  children: ReactElement;
}

const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('storage', callback);
  };
};

export default function LoginProvider({ children }: Props) {
  const auth = useAtomValue(authAtom);
  const unauthorized = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem('unauth') === 'true',
    () => null,
  );

  if (auth !== undefined || unauthorized === true) return children;
  return <LoginPage />;
}

function LoginPage() {
  const setAuth = useSetAtom(authAtom);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    void (async () => {
      e.preventDefault();

      try {
        const { data } = await supabase.auth.signInWithPassword({ email, password });
        if (data.user?.id == null) throw new Error('No user id');

        // eslint-disable-next-line no-console
        console.log(data);
        await upsertUser(name, data.user.id);
        setAuth({ email, password, uid: data.user.id });
      } catch (_) {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error != null) throw new Error(error.message);
        if (data.user?.id == null) throw new Error('No user id');
        setAuth({ email, password, uid: data.user.id });
      }
    })();
  };

  return (
    <main className={styles.main}>
      <h1>Login / Signin</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          <span>Name</span>
          <input id="name" onChange={onChangeName} type="text" value={name} />
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input id="email" onChange={onChangeEmail} type="email" value={email} />
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input id="password" onChange={onChangePassword} type="password" value={password} />
        </label>

        <div className={styles.submit_area}>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
