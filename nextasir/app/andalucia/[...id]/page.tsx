import { notFound } from "next/navigation";

interface PageProps { params: Promise<{ id: string }>}

export default async function Page({ params }: PageProps) {
  const { id } = await params; //Necesita leer el parámetro de entrada
  console.log(id);
  if(id[1]==undefined)
  switch(id[0]){
    case 'almeria': return ( <div>  <p>Estás cosas de ALMERÍA</p>  </div>); break;
    case 'malaga': return ( <div>  <p>Estás viendo cosas de MÁLAGA</p>  </div>); break;
    default: notFound();
  }
  else{
    return ( <h2>  <p>Estás viendo el detalle de {id[0]}</p>  </h2>);
  }

}