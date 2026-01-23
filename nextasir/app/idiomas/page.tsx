'use client';
import { useState } from "react";
import { getDictionary } from "./diccionario";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const changeLanguage = (lang:any) => {
      setIdioma(lang);
    }
    let [idioma,setIdioma]=useState('en');
    let dict=getDictionary(idioma);
    return (
        <>
        <nav>
            <Link href="/idiomas">{dict.home}</Link> - 
            <Link href="/pokemon">Pokemon</Link> 
            <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
    <Image src="/spain.png" alt="Español" width={24} height={24} /> </button>
<button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
    <Image src="/uk.png" alt="Inglés" width={24} height={24} /> </button>
    <button onClick={() => changeLanguage('fr')} className="p-2 rounded-full hover:bg-gray-200">
    <Image src="/frances.jpeg" alt="Francés" width={24} height={24} /> </button>
          </nav>
          <main>
          <h1>{dict.title}</h1>
          <h2>{dict.description}</h2>
          </main>
    </>
    );
}