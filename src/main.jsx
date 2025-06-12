import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/TP5-ReactRouter-Colombet">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)