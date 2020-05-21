import React from 'react';
import { Grid } from '@chakra-ui/core';

import PokemonCard from './PokemonCard';

const PokemonsList = ({ pokemons }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, auto)',
        sm: 'repeat( auto-fill, minmax(130px, 1fr) )',
      }}
      gap={4}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonsList;
