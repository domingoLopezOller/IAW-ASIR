import Link from "next/link";

type PokemonList = {
  results: {    name: String;    url: String;  }[];
};

async function getPokemons(): Promise<PokemonList> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemo");

  if (!res.ok) {
    throw new Error("Error al cargar los pokémon");
  }

  return res.json();
}
export const metadata = {
  title: "Página de POKEMON",
  description: "Página generada desde NEXTJS",
  icons:{icon:'/pokemonLogo.svg'}
};
export default async function PokemonPage() {
  const pokemons = await getPokemons();

  return (
    <div>

      <h1>Lista de Pokémon</h1>
      <ul>
        {pokemons.results.map((pokemon, index:number) => (
          <li key={index}><Link href={`/pokemon/${index+1}`}>{pokemon.name}</Link></li>
        ))}
      </ul>
    
      <footer> Desarrollado por IAW </footer>
    </div>
  );
}
