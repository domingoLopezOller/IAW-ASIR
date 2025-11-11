import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Navigation from '../tareaWeb/componentes/Navbar'

export default function Web2() {
  return (
    <>  
      <Router>
        <header>
        <h1>páginas de MORGADO</h1>
        </header>
        <Navigation/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="/about/:nombre" element={<About/>} />
            </Route> 
    
            <Route path="/usuario/:nombre" element={<MySkills/>} />
            <Route path="/contacto" element={<Contacto/>} />
            
            <Route path="*" element={<Nopage/>} />      
            
          </Routes>
        </main>
        <footer>

        </footer>
      </Router>
    </>
  )
}

function MySkills() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>Parámetro introducido: {params.nombre}</h2>;
}

function Nopage() {
    //Lectura del parámetro de la URL
    return <h2>ERROR: página no encotnrad. ERROR 404</h2>;
}

function Home() {
  return <> 
    <h1>Página inicial de IAW</h1>;
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab quam quo sed eum officiis, quis animi rerum perferendis repudiandae omnis harum! Porro quidem natus amet sunt dicta autem temporibus.</p>  
    <Outlet/>
    </>
}
function Contacto() {
  return <h2>Llámenos al 666 66 66 66</h2>;
}

function About() {
  const params = useParams();
  return <>
    <h3>INFORMACIÓN SOBRE</h3>;
    <h4> COSAS DEL AUTOR {params.nombre}</h4>
  </>
}