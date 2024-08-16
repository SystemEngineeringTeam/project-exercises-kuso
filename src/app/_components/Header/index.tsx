import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>クソコード博覧会</h1>
        <div className={styles.link}>
          <a href="/codes">鑑賞する</a>
          <a href="/post">出展する</a>
          <a href="/mypage">評価をみる</a>
        </div>
      </div>
    </header>
  );
}
