export default function isDev() {
  if (typeof window === 'undefined')
    return;

  const { hostname } = window.location;
  return hostname.includes('dev');
}