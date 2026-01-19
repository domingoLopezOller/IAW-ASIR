import Header from "../componentes/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Header/>
            {children}
        <footer>by IAW</footer>
        </>
    );
}