import {useState, useEffect} from 'react';
import styles from 'styles/RotatingCube.module.css';

const sides = ['front', 'bottom', 'back', 'top'];

export function RotatingCube({contents}) {
  const [side, setSide] = useState(0); // Counter for current side viewed
  const [view, setView] = useState(contents.slice(0, 4)); // Sliding subarray of texts

  const rotate = () => {
    if (!document.hasFocus()) return;

    setSide(side + 1); // Next side

    // Update the hidden side of the cube
    const viewIndex = (side + 2) % view.length;
    const arrIndex = (side + 2) % contents.length;
    view[viewIndex] = contents[arrIndex];

    setView(view);
  };

  useEffect(() => {
    const interval = setInterval(rotate, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.scene}>
      <div
        className={styles.cube}
        style={{transform: `translateZ(-80vh) rotateX(${side * 90}deg)`}}
        onClick={rotate}
      >
        {sides.map((s, i) => (
          <div className={`${styles.face} ${styles[s]}`} key={s}>
            {view[i]}
          </div>
        ))}
      </div>
    </div>
  );
}
