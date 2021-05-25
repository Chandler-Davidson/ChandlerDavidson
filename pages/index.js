import styles from 'styles/Index.module.css';
import {RotatingCube} from 'partials/rotatingCube';
import {fetchPosts} from 'util/cosmic';
import PostList from 'partials/postList';
import Link from 'next/link';

export async function getStaticProps(context) {
  return {
    props: {
      posts: await fetchPosts(),
    },
  };
}

const activities = ['coding', 'with 👪', 'skating', 'walking 🐕‍🦺', 'climbing', 'drinking 🍺'];

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h2 style={{whiteSpace: 'nowrap'}}>I'm probably</h2>
        <RotatingCube texts={activities} />
      </div>
      <PostList posts={posts || []} />
      <Link href="/blog">
        <a>
          <strong>More</strong>
        </a>
      </Link>
    </div>
  );
}
