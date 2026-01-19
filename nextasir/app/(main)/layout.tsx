import Navbarra from "../componentes/Navbar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <header><img src="/next.svg" alt="next" width="400" height="250"/></header>
        <Navbarra/>
            {children}
        <footer>BY Domingo López Oller</footer>
        </>
    );
}