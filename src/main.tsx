import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Content is visible by default; only opt into hide-then-reveal once we know JS
// is running, so a failed observer can never leave the page blank.
document.documentElement.classList.add('lh-reveal-ready')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
