import { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const RESET_AFTER_MS = 2500;

export default function NotFound() {
  const [state, setState] = useState(defaultState());

  const onTap = () => {
    const { prevTime, clicks, bpmTotal } = state;
    const currentTime = getTime();

    if (prevTime == null) {
      setState({ ...state,
        prevTime: currentTime,
        startTime: currentTime
      });
      return;
    }

    if (currentTime - prevTime > RESET_AFTER_MS) {
      resetState();
      return;
    }

    const timeDiff = currentTime - prevTime;
    const bpm = 60 / timeDiff;

    setState({
      ...state,
      prevTime: currentTime,
      clicks: clicks + 1,
      bpmTotal: bpmTotal + bpm,
      averageBpm: bpmTotal / (clicks + 1) * 1000
    });

    console.log(state);
  }

  const resetState = () => setState(defaultState());

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={['all']}
        handleEventType="keydown"
        onKeyEvent={(_, e) => onTap(e)}
      />
      <h2 style={{textAlign: 'center'}}>{state.averageBpm.toFixed(0)}</h2>
      <button onClick={onTap}>Tap (or use any key)</button>
      <button onClick={resetState}>Reset</button>
      <div>Taps: {state.clicks}</div>
      <div>Temp: {state.averageBpm.toFixed(3)} BPM</div>
      <div>Time: {toSeconds(state.prevTime - state.startTime)} s</div>

      <style jsx>{`
        h2 {
          font-size: 200%;
        }
        div {
          font-size: 150%;
        }

        button {
          font-size: 125%;
        }
      `}</style>
    </div>
  );
}

const getTime = () => new Date().getTime();

const defaultState = () => ({
  startTime: null,
  prevTime: null,
  clicks: 0,
  bpmTotal: 0,
  averageBpm: 0
})

const toSeconds = milliseconds => (milliseconds / 1000).toFixed(2);