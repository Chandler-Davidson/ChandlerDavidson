import { useState } from "react";
// import style from "./activityStatus.module.css";
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

  const [index, setIndex] = useState(0);
  const [view, setView] = useState(texts.slice(0, 4))
  const updateHiddenSide = () => {
    const viewIndex = (index + 2) % view.length;
    const textsIndex = (index + 2) % texts.length;
    view[viewIndex] = texts[textsIndex];
    setView(view);
  }

  return (<>
    <div className={styles.scene}>
      <div className={styles.cube} style={{
        transform: `translateZ(-80vh) rotateX(${index * 90}deg)`
      }}onClick={
        () => {
          setIndex(index + 1);
          updateHiddenSide();
        }}>
        {sides.map((s, i) => <div className={styles.face} id={styles[s]} key={s}>{view[i]}</div>)}
      </div>
    </div>
  </>);
}