'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { type ChangeEvent, type FormEvent, type ReactElement, useState } from 'react';
import styles from './index.module.scss';
import { authAtom } from '@/stores/authAtom';
import { supabase } from '@/utils/supabase/client';

interface Props {
  children: ReactElement;
}

export default function LoginProvider({ children }: Props) {
  const auth = useAtomValue(authAtom);

  if (auth === undefined) return <LoginPage />;
  return children;
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
      if (data.user?.id == null) throw new Error('No user id');

      // eslint-disable-next-line no-console
      console.log(data);
      setAuth({ email, password, uid: data.user?.id });
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
