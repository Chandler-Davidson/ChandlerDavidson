// Global css imports must be done in _app.js
import isDev from 'utils/isDev';
if (isDev()) {
  import('styles/dark.css');
} else {
  import('styles/light.css');
}

import 'styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default App;