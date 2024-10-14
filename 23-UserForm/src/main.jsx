import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserNameForm from './UserNameForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserNameForm />
  </StrictMode>,
)
