import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import styles from './Keyboard.module.css';

export function Key({tone, index, onAttack, onRelease}) {
  function onKeyChange(event) {
    if (event.repeat || event.keyCode - 49 !== index) return;

    event.type === 'keydown' ? onAttack(tone) : onRelease(tone);
  }

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={['numeric']}
        handleEventType="keydown"
        onKeyEvent={(_, e) => onKeyChange(e)}
      />
      <KeyboardEventHandler
        handleKeys={['numeric']}
        handleEventType="keyup"
        onKeyEvent={(_, e) => onKeyChange(e)}
      />
      <button
        id={`key-${tone}`}
        key={tone}
        className={styles.button}
        onMouseDown={() => onAttack(tone)}
        onMouseUp={() => onRelease(tone)}
        onMouseEnter={e => (e.buttons === 1 ? onAttack(tone) : undefined)}
        onMouseLeave={() => onRelease(tone)}
        onTouchStart={() => onAttack(tone)}
        onTouchEnd={() => onRelease(tone)}
      >
        {tone[0]}
      </button>
    </div>
  );
}
