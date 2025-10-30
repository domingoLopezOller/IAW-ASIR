import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import Cabecera from './componentes/Cabecera.tsx'
import Main from './componentes/Main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <header>
      <Cabecera/>
      <Cabecera/>
      <Cabecera/>
      <Cabecera/>
    </header>
    <nav />
    <Main />
  </StrictMode>,


)
