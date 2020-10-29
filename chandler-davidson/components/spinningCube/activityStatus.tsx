import { useEffect, useState } from "react";
import styles from "./activityStatus.module.css"
type Props = {
  texts: string[]
};

const sides = [
  'front',
  'bottom',
  'back',
  'top'
];

export function RotatingCube(props: Props) {
  const { texts } = props;

  const [side, setSide] = useState(0); // Counter for current side viewed
  const [view, setView] = useState(texts.slice(0, 4)); // Sliding subarray of texts

  const updateHiddenSide = () => {
    setSide(side + 1); // Next side

    // Update the back side of the cube
    const viewIndex = (side + 2) % view.length;
    const textsIndex = (side + 2) % texts.length;
    view[viewIndex] = texts[textsIndex];

    setView(view);
  }

  useEffect(() => {
    const interval = setInterval(updateHiddenSide, 2000);
    return () => clearInterval(interval);
  });

  return (<>
    <div className={styles.scene}>
      <div className={styles.cube}
        style={{ transform: `translateZ(-80vh) rotateX(${side * 90}deg)` }}
        onClick={updateHiddenSide}>
        {sides.map((s, i) =>
          <div className={styles.face} id={styles[s]} key={s}>{view[i]}</div>)}
      </div>
    </div>
  </>);
}
