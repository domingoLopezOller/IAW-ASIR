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

export const Cabecera4 = ({titulo,subtitulo}:any) => {
    let variable= "ejemplo";
  return (
    <>
      <h1> {`hola ${variable}`}</h1>
      <h2>{subtitulo}</h2>
    </>
  )
}
