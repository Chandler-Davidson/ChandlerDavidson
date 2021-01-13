import styles from '../styles/Navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{margin: '0 .5vmin'}}>
      <Link href="/">
        <a style={{textDecoration: 'none'}}>
          <h2 className={styles.title}>Chandler Davidson</h2>
        </a>
      </Link>
      <span className={styles.right}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="https://github.com/chandler-davidson">
          <a>Github</a>
        </Link>
        <Link href="https://instagram.com/chandler_marx_davidson/">
          <a>Instagram</a>
        </Link>
      </span>
    </nav>
  );
}
