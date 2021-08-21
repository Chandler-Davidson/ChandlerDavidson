import dynamic from 'next/dynamic';

const components = {
  // The path parameter must be hardcoded for webpack
  default: dynamic(() => import('./default'), {ssr: false}),
  'example-counter': dynamic(() => import('./example-counter'), {ssr: false}),
  tonify: dynamic(() => import('./tonify'), {ssr: false}),
  'maybe-maybe-maybe': dynamic(() => import('./maybe-maybe-maybe'), {ssr: false}),
  'BPM': dynamic(() => import('./bpm'), {ssr: false}),
};

export function getComponent(tag) {
  return tag in components ? components[tag] : components.default;
}
