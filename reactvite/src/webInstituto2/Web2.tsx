import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Navigation2 from './componentes/Navbar';
import BasicExample from '../tareaWeb/componentes/Card';
import Galeria from '../tareaWeb/componentes/Carousel';

export default function Web2() {
  return (
    <>  
      <Router>
        <header>
          <h1>páginas de DOMINGO</h1>
        </header>
        <Navigation2/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fotos" element={<Fotos/>} />
            <Route path="/contacto" element={<Nopage/>} />
            <Route path="/news" element={<Noticias/>}>
              <Route path="/news/:nombre" element={<MySkills/>}/>
              <Route path="/news/:nombre" element={<MySkills/>}/>
            </Route>      
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
    let texto:string;
    if (params.nombre=='jefatura'){ texto="Escribiendo algo sobre JEFATURA"}
    else texto="Escribiendo algo sobre IGUALDAD"
    return <div style={{backgroundColor:'cyan'}}>
        <h3> {texto} </h3>
      </div>
}

function Nopage() {
    //Lectura del parámetro de la URL
    return <img src='error.jpeg' alt='error page' width='100%'/>
}

function Home() {
  return <> 
    <h1>Página inicial de IAW</h1>
    <div style={{display:'flex', flex:'row nowrap'}}>
      <BasicExample colorear='green' colorear2='red' titulo='Bienvenido al Cura Valera' imagen='/imagen.jpg'/>
      <BasicExample colorear='blue' colorear2='orange' titulo='Aprende REACT' imagen='/vite.svg'/>
      <BasicExample colorear='black' colorear2='blue' titulo='HOLAAA' imagen='/logo.jpg'/>
    </div>
    </>
}
function Fotos() {
  return <>
      <h1>¡¡VISITA ANDALUCÍA!!</h1>
      <div style={{width:'800px',padding:'20px'}}>
        <Galeria/>;
      </div>
    </>
}

function Noticias() {
  return <>
    <h1>NOTICIAS</h1> 
    <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni recusandae harum similique dignissimos necessitatibus nulla ipsam inventore qui dolore quis consectetur, repudiandae quisquam illo, minus veritatis ullam distinctio id temporibus!
    Alias veniam possimus sunt omnis debitis provident. Laborum repellat iusto, assumenda eos eaque consequuntur aliquid odio iure minus consectetur aut quas ipsa dolorem inventore deserunt, ad quia facilis distinctio iste?
    Aut odio aliquid laborum dolorem architecto mollitia, debitis eveniet corporis quae voluptatem quas fugit voluptate accusamus consequuntur sequi, eos molestiae! Voluptatum eum fuga error corporis enim nobis consequatur. Quos, amet?
    Incidunt quia neque vitae rerum vel itaque reiciendis, molestiae ducimus sapiente iusto, repellendus similique tempore! Rem similique quis, commodi eligendi, corporis placeat corrupti quisquam sed fugit nulla amet! Quos, libero.
    Doloremque, id ipsam quas odit dolorem expedita earum saepe? Exercitationem temporibus repellendus neque dicta cupiditate ad nam odit illum, dolorem minima assumenda odio pariatur tenetur voluptatum officiis laudantium beatae rerum.
    <Outlet/>
  </div>
  </>
}
