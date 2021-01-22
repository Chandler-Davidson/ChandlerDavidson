import {useState} from 'react';
import styles from './Maybe.module.css';

export default function Post({post}) {
  const {title, author, subreddit, upvotes, media, url} = post;

  const [isHidden, setHidden] = useState(true);
  const showSubreddit = () => setHidden(!isHidden);

  return (
    <div className="post">
      <a href={url}>
        <h3
          style={{
            textAlign: 'center',
          }}
        >
          {title}
        </h3>
      </a>

      <video autoPlay loop controls src={media} className={styles.video} />

      <table className={styles.details}>
        <tbody>
          <tr>
            <td>
              <p>
                Author: <strong>{author}</strong>
              </p>
            </td>
            <td>
              <p>
                Up votes: <strong>{upvotes}</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={showSubreddit}>{`${isHidden ? 'Show' : 'Hide'} Subreddit`}</button>
            </td>
            <td>
              <p>
                <strong>{isHidden ? '...' : subreddit}</strong>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
