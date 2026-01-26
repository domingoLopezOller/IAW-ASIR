//layout.js
// import './globals.css'
import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBootstrap";


export const metadata = {
  title: "APLICACIÓN WEB IAW",
  description: "Página generada desde NEXTJS",
  icons:{icon:'/next.svg'}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AddBootstrap/>
        {children}</body>
    </html>
  );
}