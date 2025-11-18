import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Pokemon2 } from './componentes/Pokemon'
// import { Cabecera3 } from './componentes/Cabecera3'
// import Web from './webInstituto/Web.tsx'
// import Web2 from './webInstituto2/Web2.tsx';
// import Web2 from './webInstituto2/Web2.tsx';
// import Web2Data from './webInstituto2/Web2.tsx';
// import Rutas from './webInstituto2/Web3.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* <Web/> */}
    {/* <Web2Data/> */}
    {/* <Rutas/> */}
    {/* <WebTarea/> */}
    {/* <Cabecera3/> */}
    {/* <Pokemon id={25} /> */}
    {/* <Pokemon id={25} /> */}
    {/* <WebPokemon /> */}
    <Pokemon2 id={25}/>
  </StrictMode>,


)
