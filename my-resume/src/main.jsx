import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  const rootEl = document.getElementById('root')
  if (!rootEl) throw new Error('Root element not found')
  const root = createRoot(rootEl)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} catch (err) {
  // Log error to console and write visible error to the page
  // so users see why the app failed instead of a blank screen.
  // Keep this change minimal and safe for debugging.
  // eslint-disable-next-line no-console
  console.error(err)
  document.body.innerHTML = `\n    <div style="padding:24px;font-family:system-ui,Segoe UI,Arial,sans-serif;color:#111;background:#fff;">\n      <h1 style="color:#b91c1c;">Application render error</h1>\n      <pre style="white-space:pre-wrap;color:#111">${String(err)}</pre>\n    </div>`
}
