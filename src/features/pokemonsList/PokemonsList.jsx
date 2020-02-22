import React from 'react';
import { Grid } from '@chakra-ui/core';

import PokemonCard from './PokemonCard';

const PokemonsList = ({ pokemons }) => {
  return (
    <Grid mb={5} templateColumns='repeat(5, 1fr)' gap={6}>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonsList;
