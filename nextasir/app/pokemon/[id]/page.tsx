type Pokemon = {
  numero: number;
  img: string;
  nombre: string;
  hp: number;
  ataque: number;
  defensa: number;
};

async function getPokemon(id: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store", // opcional
  });

  if (!res.ok) { throw new Error("Error al cargar el Pokémon"); }
  const data = await res.json();

  return {
    numero: data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    nombre: data.name,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
  };
}
interface PageProps { params: Promise<{ id: string }>}
export default async function Page({ params }: PageProps) {
  const { id } = await params; //Necesita leer el parámetro de entrada
    const pokemon = await getPokemon(id);
  return (
    <div>
      <h1>{pokemon.nombre}</h1>
      <img src={pokemon.img} alt={pokemon.nombre} width={300} />
      <p>HP: {pokemon.hp}</p>
      <p>Ataque: {pokemon.ataque}</p>
      <p>Defensa: {pokemon.defensa}</p>
    </div>
  );
}