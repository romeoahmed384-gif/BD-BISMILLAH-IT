// Ensure window.fetch is safely assignable in sandboxed iframe environments
try {
  const origFetch = window.fetch;
  let currentFetch = typeof origFetch === 'function' ? origFetch.bind(window) : origFetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return currentFetch;
    },
    set(val) {
      currentFetch = val;
    },
    configurable: true,
    enumerable: true,
  });
} catch {
  // ignore
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
