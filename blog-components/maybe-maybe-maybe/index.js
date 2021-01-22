import {useState, useEffect} from 'react';
import Post from './post';
import getNextPost from './posts';
import styles from './Maybe.module.css';

export default function MaybeMaybeMaybe() {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getData() {
      setPost(await getNextPost());
    }

    getData();
  }, []);

  return (
    <div>
      <div className={styles.hero}>
        <Post post={post || {}} />
        <button
          onClick={async () => {
            setPost(await getNextPost());
          }}
          style={{
            marginLeft: '45%',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
