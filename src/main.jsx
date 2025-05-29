import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Tp4-citas-parte-1">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)