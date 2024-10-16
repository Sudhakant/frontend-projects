import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShoppingList from './ShopppingList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ShoppingList />
  </StrictMode>,
)
