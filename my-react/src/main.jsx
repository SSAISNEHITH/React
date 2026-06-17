import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'    
import Context from "./Context.jsx"
import Reference from './Reference.jsx'
import Animal from './Animal.jsx'
import  Classic from './Classic.jsx'
import Effect from './Effect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context></Context>
    <Reference></Reference>
    <Effect></Effect>
    <Animal></Animal>
  <Classic></Classic>
  </StrictMode>
)
