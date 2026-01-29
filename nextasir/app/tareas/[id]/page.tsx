'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
type Tarea = {id: number; texto: string; }
type PageProps = {  params: { id: string };}

export default function Page({ params }: PageProps) {
  const [tarea, setTarea] = useState<Tarea | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [eliminada, setEliminada] = useState(false);
  useEffect(() => {
    const fetchTarea = async () => {
      try {
        const { id } = await params;
        const res = await fetch(`/api/tareas/${id}`);
        if (!res.ok) {
          throw new Error('Tarea no encontrada');
        }
        const data: Tarea = await res.json();
        setTarea(data);
      } catch (err: any) {
        setError(err.message || 'Error desconocido');
      }
    };    fetchTarea();  }, [params]);
    const borrarTarea = async () => {
    try {
      const { id } = await params;
      const res = await fetch(`/api/tareas/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('No se ha podido borrar la tarea');
      }
      setEliminada(true);
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    }
  }
  if (error) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger">{error}</h1>
        <Link href='/tareas' className="btn btn-primary mt-3"> Volver atrás</Link>
      </div>
    )
  }
if (eliminada) {
    return (
      <div className="container mt-5">
        <h1 className="text-success">Se ha eliminado correctamente</h1>
        <Link href='/tareas' className="btn btn-primary mt-3">Volver atrás</Link>
      </div>
    )
  }

  if (!tarea) return <div className="container mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <h1>{tarea.id} - {tarea.texto}</h1>
      <button
        onClick={borrarTarea}
        className="btn btn-danger mt-3"
      >
        Borrar Tarea
      </button>
    </div>
  )
}