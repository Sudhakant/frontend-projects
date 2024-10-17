import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuoteFetcher from './QuoteFetcher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <QuoteFetcher />
  </StrictMode>,
)
