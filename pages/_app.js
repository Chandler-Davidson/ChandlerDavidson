'use client';

import { useEffect } from 'react';

// Global css imports must be done in _app.js
import isDev from 'utils/isDev';
if (isDev()) {
  import('styles/dark.css');
} else {
  import('styles/light.css');
}

import 'styles/globals.css';

function App({ Component, pageProps }) {
  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.error('Service Worker registration failed:', err);
        });
      });
    }
  }, []);

  // Add manifest link
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = '/manifest.json';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Component {...pageProps} />
  );
}

export default App;