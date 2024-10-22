import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  if (typeof window === 'undefined') {
    return;
  }

  const [matches, setMatches] = useState(window?.matchMedia(query)?.matches ?? false);

  useEffect(() => {
    if (window) {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};