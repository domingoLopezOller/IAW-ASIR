
'use client';
import { useEffect, useState } from 'react';
type Tarea = { id: number, texto: string }

export default function Page() {
    const [tareas, setTareas] = useState<Tarea[]>([])
    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [tareaEditando, setTareaEditando] = useState<Tarea | null>(null)

    useEffect(() => {
        fetchTareas()
    }, [])

    const fetchTareas = async (): Promise<void> => {
        const res = await fetch('/api/tareas')
        const data: Tarea[] = await res.json()
        setTareas(data)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!nuevaTarea.trim()) return

        const res = await fetch('/api/tareas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texto: nuevaTarea })
        })

        const nuevaTareaObj: Tarea = await res.json()
        setTareas([...tareas, nuevaTareaObj])
        setNuevaTarea('')
    }

    const handleEditar = async (tarea: Tarea): Promise<void> => {
        if (!tareaEditando) return
        const res = await fetch('/api/tareas', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: tarea.id,
                texto: tareaEditando.texto
            })
        })
        const tareaActualizada: Tarea = await res.json()
        setTareas(
            tareas.map(t => t.id === tarea.id ? tareaActualizada : t)
        )
        setTareaEditando(null)
    }

    const handleEliminar = async (id: number): Promise<void> => {
        await fetch('/api/tareas', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })

        setTareas(tareas.filter(t => t.id !== id))
    }
    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h1 className="mb-4 text-center">Lista de Tareas</h1>
            <form onSubmit={handleSubmit} className="mb-3 d-flex">
                <input type="text" value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    className="form-control me-2"
                    placeholder="Nueva tarea"
                />
                <button type="submit" className="btn btn-success">  Agregar  </button>
            </form>

            <ul className="list-group">
                {tareas.map(tarea => (
                    <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center" >
                        <div className="flex-grow-1 me-2">
                            {tareaEditando?.id === tarea.id ? (
                                <input type="text" value={tareaEditando.texto} onChange={(e) =>
                                    setTareaEditando({ ...tareaEditando, texto: e.target.value })
                                }
                                    className="form-control"
                                />
                            ) : (tarea.texto)}
                        </div>
                        <div className="btn-group">
                            {tareaEditando?.id === tarea.id ? (
                                <button onClick={() => handleEditar(tarea)}
                                    className="btn btn-success btn-sm">    Guardar     </button>
                            ) : (
                                <button onClick={() => setTareaEditando(tarea)}
                                    className="btn btn-warning btn-sm"    >   Editar      </button>
                            )}

                            <button onClick={() => handleEliminar(tarea.id)}
                                className="btn btn-danger btn-sm" >        Eliminar     </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}