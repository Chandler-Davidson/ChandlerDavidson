import Interweave from 'interweave';
import {BlogComponentMatcher} from '../util/interweave/matchers';
import styles from '../styles/Post.module.css';

export default function Post({post}) {
  const {title, content, published_at} = post || {};
  const date = published_at ? new Date(published_at).toDateString() : '';

  return (
    <div style={{marginTop: '4px'}}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{date}</h3>
      <div className={styles.postContainer}>
        <Interweave content={content} matchers={[new BlogComponentMatcher('blog')]} />
      </div>
    </div>
  );
}
