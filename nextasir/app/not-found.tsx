import Link from 'next/link' 
export default function NotFound() { 
return ( 
<div> 
    <img src="/next.svg" alt="next" width="300" height="200"/>
    <h2>Not Found</h2> <p>Could not find requested resource</p> 
    <Link href="/">Return Home</Link> 
    </div> 
)}