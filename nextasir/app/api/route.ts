import { NextResponse } from "next/server";

export async function GET() { // GET(request: Request, { params }: { params: { id: string } }) 
    try { 
        //const { id } = params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
        
        if (!response.ok) {
            return NextResponse.json( { error: 'Pokémon no encontrado' }, { status: 404 } );
        }
    
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
        } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}