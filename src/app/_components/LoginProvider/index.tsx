'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { type ChangeEvent, type FormEvent, type ReactNode, useState } from 'react';
import styles from './index.module.scss';
import { authAtom } from '@/stores/authAtom';
import { supabase } from '@/utils/supabase/client';

interface Props {
  children: ReactNode;
}

export default async function LoginProvider({ children }: Props) {
  const auth = useAtomValue(authAtom);

  if (auth === undefined) return <LoginPage />;
  return await children;
}

function LoginPage() {
  const setAuth = useSetAtom(authAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    void (async () => {
      e.preventDefault();

      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error != null) throw new Error(error.message);

      // eslint-disable-next-line no-console
      console.log(data);
      setAuth({ email, password });
    })();
  };

  return (
    <main className={styles.main}>
      <h1>Login / Signin</h1>

      <form onSubmit={onSubmit}>
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
