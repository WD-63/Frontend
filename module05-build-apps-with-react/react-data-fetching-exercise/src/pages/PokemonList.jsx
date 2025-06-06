import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { Loading, Pokemon } from '../components';

const PokemonList = () => {
  const { pokemon } = useLoaderData();

  return (
    <Suspense fallback={<Loading message='Loading Pokémon' />}>
      <Pokemon promise={pokemon} />
    </Suspense>
  );
};

export default PokemonList;
