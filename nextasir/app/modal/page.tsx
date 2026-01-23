'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalW() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    

    useEffect(() => {
        setMounted(true); // evita problema de hidration
    }, []);

    if (!mounted) return null;
    return (
        <Modal show={true} onHide={() => router.push('/')}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => router.push('/')}> {/*Contrl de ruta al hacer click o pulsar fuera de la ventana modal*/}
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}
