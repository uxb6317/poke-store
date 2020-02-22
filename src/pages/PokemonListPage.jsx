import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Spinner, Flex } from '@chakra-ui/core';

import PokemonPagination from '../features/pokemonsList/PokemonPagination';
import PokemonsList from '../features/pokemonsList/PokemonsList';

const PokemonListPage = () => {
  const { pokemonsByName, isLoading, pages, currentPage } = useSelector(
    state => state.pokemons
  );
  const pokemons = pages[currentPage]?.map(name => pokemonsByName[name]);

  return (
    <Flex justify='center'>
      {isLoading ? (
        <Spinner />
      ) : (
        pokemons && (
          <Stack align='center'>
            <PokemonsList pokemons={pokemons} />
            <PokemonPagination pages={pages} currentPage={currentPage} />
          </Stack>
        )
      )}
    </Flex>
  );
};

export default PokemonListPage;
