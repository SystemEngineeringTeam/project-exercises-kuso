'use client';

import styles from './index.module.scss';
import { authAtom } from '@/stores/authAtom';
import { supabase } from '@/utils/supabase/client';
import { useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export default function LoginProvider({ children }: Props) {
  const auth = useAtomValue(authAtom);

  if (auth == undefined) return <LoginPage />;
  return children;
}

function LoginPage() {
  const setAuth = useSetAtom(authAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);

    console.log(data);
    setAuth({ email, password });
  };

  return (
    <main className={styles.main}>
      <h1>Login / Signin</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={onChangeEmail} />

        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={onChangePassword} />

        <div className={styles.submit_area}>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
