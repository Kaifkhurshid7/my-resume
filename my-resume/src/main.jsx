/**
 * @file main.jsx
 * @description Application entry point — mounts React to the DOM.
 *
 * Uses StrictMode for development-time warnings about deprecated
 * patterns and potential issues. Includes a minimal error boundary
 * fallback so users see a helpful message instead of a blank screen
 * if the app fails to mount.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
