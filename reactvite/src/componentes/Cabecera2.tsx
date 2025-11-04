import React from 'react'

export const Cabecera2 = () => {
  return (
      <h1> BUENOS DÍAS</h1>
  )
}

export const Cabecera3 = () => {
  return (
    <>
      <h1> BUENAS TARDES</h1>
    </>
  )
}
interface ejemplo{
  titulo:string,
  subtitulo:string,
  tercero?:string
}
export const Cabecera4 = ({titulo,subtitulo,tercero}:ejemplo) => {
    let variable= "ejemplo";
  return (
    <>
      <h1> {titulo}</h1>
      <h2>{subtitulo}</h2>
      <h3>{tercero}</h3>
    </>
  )
}

export const Cabecera5 = (props:any) => {
    let variable= "ejemplo";
  return (
    <>
      <h1> {props.titulo}</h1>
      <h2>{props.subtitulo}</h2>

    </>
  )
}