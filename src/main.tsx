import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Content is visible by default; only opt into hide-then-reveal once we know
// JS is running, so a failed observer can never leave the page blank.
document.documentElement.classList.add('lh-reveal-ready')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
