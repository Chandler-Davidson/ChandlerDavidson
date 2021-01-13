import Link from 'next/link';
import styles from '../styles/PostList.module.css';

export default function PostList({posts}) {
  return (
    <ul className={styles.postList}>
      {posts.map(({slug, title, published_at}) => (
        <li key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>{`${title} - ${new Date(published_at).toDateString()}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
