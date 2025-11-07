import React from 'react'
import estilos from './body.module.css'
import BasicExample from './Card'
export default function Body() {
  return (
    <main>
        <section>
            <BasicExample colorear='green' colorear2='red' titulo='Bienvenido al Cura Valera' imagen='/imagen.jpg'/>
            <BasicExample colorear='blue' colorear2='orange' titulo='Aprende REACT' imagen='/vite.svg'/>
        </section>
        <aside>

        </aside>
    </main>
  )
}
