import { Suspense } from "react";
import Navbarra from "../componentes/Navbar";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export default function Layout({children}: {children: React.ReactNode}) {
    sleep(3000);
    return (
        <>
        <Navbarra/>
        <section>
            <Suspense fallback={<h1>Loading.....</h1>}>
            {children}
            </Suspense>
        </section>
        <footer>Desarrollado por IAW </footer>
        </>
    );
}