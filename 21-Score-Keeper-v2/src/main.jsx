import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScoreKeeperV2 from './ScoreKeeper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScoreKeeperV2 players={10} target={12}/>
  </StrictMode>,
)
