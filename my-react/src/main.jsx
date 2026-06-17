import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Animal from './Animal.jsx'
import  Classic from './Classic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animal></Animal>
  <Classic></Classic>
  </StrictMode>,
)
