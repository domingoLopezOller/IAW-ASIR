import {createBrowserRouter,RouterProvider, Outlet, useParams,} from "react-router-dom";
import Navigation2 from "./componentes/Navbar";
import BasicExample from "../tareaWeb/componentes/Card";
// --- LAYOUT PRINCIPAL ---
function Layout() {
  return (
    <>
      <header>
        <h1>páginas de DOMINGO</h1>
      </header>
      <Navigation2 />
      <main>
        <Outlet /> {/* Aquí se mostrará el contenido de los componentes */}
      </main>
      <footer></footer>
    </>
  );
}

// --- DEFINICIÓN DEL ROUTER ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //Layout principal de la página
    errorElement: <Nopage />, //Página de error
    children: [
      { index: true, element: <Home /> },
      { path: "contacto", element: <Contacto /> },
      { path: "about", element: <About /> },
      { path: ":nombre", element: <MySkills /> },
    ],
  },
]);


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
function About(){
    return <h1> PÁGINA ABOUTv </h1>
}
function Contacto(){
    return <h1> PÁGINA CONTACTO </h1>
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
export default function Rutas() { return <RouterProvider router={router} />;}