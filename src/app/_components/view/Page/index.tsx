import Link from 'next/link';
import styles from './index.module.scss';

export default function TopPage() {
  return (
    <main className={styles.main}>
      <div>
        <p>"クソコードは芸術なり"</p>
        <h1>クソコード博覧会</h1>
        <div className={styles.link}>
          <Link href="/codes">鑑賞する</Link>
          <Link href="/post">出展する</Link>
          <Link href="/mypage">評価をみる</Link>
        </div>
      </div>
    </main>
  );
}
