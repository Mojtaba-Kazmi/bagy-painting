import Link from 'next/link';
import styles from './NotFound.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>404 - Page Not Found</h1>
        <p className={styles.message}>
          Sorry, the page you are looking for doesn&#39;t exist.
        </p>
        <p className={styles.return}>
          You can go back to the{' '}
          <Link href="/" passHref>
            <span className={styles.link}>home page</span>
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default Custom404;