// Your data loaders go here
export const getPokemon = async () => {
  const pokemon = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  if (!pokemon.ok) throw new Error("Something went wrong while fetching data");
  return { pokemon: pokemon.json() };
};
