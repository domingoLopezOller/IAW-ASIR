import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cabecera from './componentes/Cabecera.tsx'
import { Cabecera2, Cabecera3, Cabecera4, Cabecera5 } from './componentes/Cabecera2.tsx'
import { ListarItems, ListarItems2, ListarItems3 } from './componentes/Lista.tsx'

let nombre="Domingo lópez";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <header>
     <Cabecera/>
     <Cabecera2/>
     <Cabecera4 titulo={`Hola buenos tardes ${nombre}`} subtitulo="Cómo estáis?" tercero="lo que sea"/>
     <Cabecera5 titulo={"Ejemplo props"} subtitulo="ejemplo props"/>
    
    </header>
    <main>
      <ListarItems/>
      <ListarItems2/>
      <ListarItems3/>
    </main>
    <footer>
      
    </footer>
  </StrictMode>,


)
