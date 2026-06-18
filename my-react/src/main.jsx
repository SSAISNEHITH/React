import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   
import Event from './Event.jsx' 
import Tom from './Tom.jsx'
import Context from "./Context.jsx"
import Context2 from "./Context2.jsx"
import Reference from './Reference.jsx'
import Animal from './Animal.jsx'
import  Classic from './Classic.jsx'
import Effect from './Effect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Event></Event>
    <Tom></Tom>
    <Context></Context>
    <Context2></Context2>
    <Reference></Reference>
    <Effect></Effect>
    <Animal></Animal>
  <Classic></Classic>
  </StrictMode>
)
