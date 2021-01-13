import PostList from '../../partials/postList';
import {fetchPosts} from '../../util/cosmic';
import styles from '../../styles/Blog.module.css';

export async function getStaticProps(context) {
  return {
    props: {
      posts: await fetchPosts(),
    },
  };
}

export default function Blog({posts}) {
  return (
    <div className={styles.container}>
      <h2>Blog</h2>
      <PostList posts={posts} />
    </div>
  );
}
