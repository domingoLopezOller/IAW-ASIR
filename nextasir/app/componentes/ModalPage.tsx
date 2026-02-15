'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export type Data = {
    titulo:string,
    imagen: string,
    texto: string
};

export default function ModalW({detalle}:{detalle:Data}) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // evita hydration
    }, []);

    if (!mounted) return null;
    return (
        <Modal
        show={true}              //abierto al entrar
        onHide={() => router.push('/instituto')}
        centered
        size="lg"
        >
        <Modal.Header closeButton className="justify-content-center">
            <Modal.Title className="w-100 text-center">{detalle.titulo}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center d-flex flex-column align-items-center">
            
            <img src={detalle.imagen} width={500} height={600} alt="imagen"/>
            <h3>{detalle.texto}</h3>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={() => router.push('/instituto')}>
            Cerrar
            </Button>
        </Modal.Footer>
        </Modal>
    )
}
