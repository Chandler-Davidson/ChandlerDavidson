// Global css imports must be done in _app.js
if (typeof window !== 'undefined') {
const { hostname } = window.location;
if (hostname.includes('dev')) {
  import('styles/dark.css');
} else {
  import('styles/light.css');
  }
}

import 'styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default App;