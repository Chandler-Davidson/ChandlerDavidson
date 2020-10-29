import { useState } from "react";

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
    <div className="scene">
      <div className="cube"
        style={{
          transform: `translateZ(-80vh) rotateX(${index * 90}deg)`
        }}
        onClick={
          () => {
            setIndex(index + 1);
            updateHiddenSide();
          }}>
        {sides.map((s, i) => <div className={`face ${s}`}>{view[i]}</div>)}
      </div>
    </div>
  </>);
}