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
  const view = texts.slice(0, 4);

  const [index, setIndex] = useState(0);
  const updateHiddenSide = () => {
    const viewIndex = (index + 2) % view.length;
    const textsIndex = (index + 2) % texts.length;
    view[viewIndex] = texts[textsIndex];
  }

  return (<>
    <div className={styles.scene}onClick={
          () => {
            setIndex(index + 1);
            updateHiddenSide();
          }}>
      <div className={styles.cube}>
        {sides.map((s, i) => <div className={styles.face} id={styles[s]} key={s}>{view[i]}</div>)}
      </div>
    </div>
  </>);
}