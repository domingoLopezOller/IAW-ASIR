import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './webInstituto/Web.tsx'
import Web2 from './webInstituto2/Web2.tsx';


let nombre="Domingo lópez";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    
    <Web/>
    {/* <Web2/> */}
  </StrictMode>,


)
