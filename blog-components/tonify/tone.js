import {Synth, Transport, Part, start} from 'tone';

const synth = new Synth().toDestination();

export function attack(tone) {
  synth.triggerAttack(tone, now());
}

export function release(tone) {
  synth.triggerRelease();
}

export function startTransport() {
  Transport.start();
}

export function stopTransport() {
  Transport.stop();
  Transport.cancel(0);
}

export function now() {
  return Transport.immediate();
}

export function playRecording(recording) {
  start();

  Transport.cancel(0);
  const part = new Part(
    (time, note) => {
      synth.triggerAttackRelease(note, '8n', time);
    },
    recording.map(({attack, tone}) => [attack, tone])
  ).start();

  Transport.start();
}
