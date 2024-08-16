import styles from './index.module.scss';

export default function TopPage() {
  return (
    <main className={styles.main}>
      <div>
        <p>"クソコードは芸術なり"</p>
        <h1>クソコード博覧会</h1>
        <div className={styles.link}>
          <a href="/codes">鑑賞する</a>
          <a href="/post">出展する</a>
          <a href="/mypage">評価をみる</a>
        </div>
      </div>
    </main>
  );
}
