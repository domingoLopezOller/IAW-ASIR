import { Suspense } from "react";
import Navbarra from "../componentes/Navbar";
import LocalErrorBoundary from "./ErrorBoundary";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export default function Layout({children}: {children: React.ReactNode}) {
    sleep(3000);
    return (
        <>
        <Navbarra/>
        <section>
            <LocalErrorBoundary>
            <Suspense fallback={<h1>Loading.....</h1>}>
            {children}
            </Suspense>
        </LocalErrorBoundary>
        </section>
        </>
    );
}

