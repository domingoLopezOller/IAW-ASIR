import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Cabecera from './componentes/Cabecera.tsx'
import { Cabecera2, Cabecera3, Cabecera4 } from './componentes/Cabecera2.tsx'

let nombre="Domingo lópez";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <header>
     <Cabecera/>
     <Cabecera2/>
     <Cabecera4 titulo={`Hola buenos tardes ${nombre}`} subtitulo="Cómo estáis?"/>
    
    </header>
  </StrictMode>,


)
