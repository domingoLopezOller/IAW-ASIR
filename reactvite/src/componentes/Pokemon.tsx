import { useEffect, useState } from "react";

export interface PokemonData {
  numero: number;
  img: string;
  imgJuego: string;
  imgCvg: string;
  nombre: string;
  experiencia: number;
  hp: number;
  ataque: number;
  defensa: number;
  especial: number;
}

export const fetchData = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    numero: data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    imgJuego: data.sprites.front_default,
    imgCvg: data.sprites.other.dream_world.front_default,
    nombre: data.name,
    experiencia: data.base_experience,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    especial: data.stats[3].base_stat,
  };
};

export const Pokemon = ({id}:{id:number}) => {//Este dará fallo por la promise que no has recibido
  let pokemon:any = fetchData(id);
  console.log(pokemon);
  return (
    <div>
        <h3> Número: {pokemon.numero} - {pokemon.nombre}</h3>
        <img src={pokemon.img} alt="pokemon"/>
        <p>HP: {pokemon.hp} Ataque: {pokemon.ataque} Defensa: {pokemon.defensa}</p>
    </div>
  )
}

export const Pokemon2 = ({ id }: {id:number}) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>();

  useEffect(() => {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //   .then((res) => res.json())
    //   .then((data) =>
    //     setPokemon({
    //       numero: data.id,
    //       img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    //       imgJuego: data.sprites.front_default,
    //       imgCvg: data.sprites.other.dream_world.front_default,
    //       nombre: data.name,
    //       experiencia: data.base_experience,
    //       hp: data.stats[0].base_stat,
    //       ataque: data.stats[1].base_stat,
    //       defensa: data.stats[2].base_stat,
    //       especial: data.stats[3].base_stat,
    //     })
    //   );
    fetchData(id).then(setPokemon);
  }, [id]);

  if (!pokemon) return <p>Cargando...</p>; //Aquí podrías poner el gif

  return (
    <div>
      <h3>Número: {pokemon.numero} - {pokemon.nombre}</h3>
      <img src={pokemon.img} alt={pokemon.nombre} />
      <p>
        HP: {pokemon.hp} &nbsp;
        Ataque: {pokemon.ataque} &nbsp;
        Defensa: {pokemon.defensa}
      </p>
    </div>
  );
};