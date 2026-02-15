'use client'
import { useState, useEffect } from 'react'
export default function Home() {
  const [message, setMessage] = useState<string>('Cargando…')
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch('http://localhost:4000')
        const data = await res.text()
        setMessage(data)
      } catch { setMessage('Error al cargar el mensaje') }
    }
    fetchMessage()
  }, [])
  return ( <p>Mensaje del servidor: {message}</p> )
}