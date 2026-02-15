import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface logo{imagen:string,enlace:string}
function Logo({imagen,enlace}:logo) {
    return (
        <>
            <Link href={enlace}><img src={imagen} width={50} height={50} alt="imagen"/> </Link>
        </>
    )
}

export default Logo
