import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner, Stack, Box, Button, useDisclosure } from '@chakra-ui/core';

import { typeColorTable } from '../features/pokemonDetail/typesColors';
import PokemonsList from '../features/pokemonsList/PokemonsList';
import Search from '../shared/Search';
import PokemonPagination from '../features/pokemonsList/PokemonPagination';
import { useSearch } from '../shared/useSearch';
import { usePagination } from '../shared/usePagination';
import { useFilter } from '../shared/useFilter';
import OutlineBadge from '../shared/OutlineBadge';
import PokemonListFilter from '../features/pokemonsList/PokemonListFilter';

const PER_PAGE = 24;

const PokemonListPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pokemonsByName, pokemonsList, isLoading } = useSelector(
    (state) => state.pokemons
  );
  const pokemons = pokemonsList.map((name) => pokemonsByName[name]);
  const [searchResult, handleSearch] = useSearch(pokemons, ['name']);
  const [typeFilter, handleTypeFilter] = useFilter();
  const [page, setPage, numPages] = usePagination(
    pokemonsList.length,
    PER_PAGE
  );
  const currentPagePokemons = pokemons.slice(
    (page - 1) * PER_PAGE,
    (page - 1) * PER_PAGE + PER_PAGE
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        pokemons && (
          <Stack direction='column' spacing={4}>
            <Stack direction='row' spacing={4}>
              <Button variantColor='red' onClick={onOpen}>
                Filter
              </Button>
              <PokemonListFilter
                typeFilter={typeFilter}
                handleTypeFilter={handleTypeFilter}
                onClose={onClose}
                isOpen={isOpen}
              />
              <Box w='full'>
                <Search handleSearch={handleSearch} />
              </Box>
            </Stack>

            {typeFilter && (
              <Stack direction='row' spacing={2}>
                {typeFilter.map((filter) => (
                  <Box onClick={() => handleTypeFilter(filter)}>
                    <OutlineBadge
                      text={filter}
                      color={typeColorTable[filter]}
                    />
                  </Box>
                ))}
              </Stack>
            )}

            {searchResult.length > 0 ? (
              <PokemonsList pokemons={searchResult} />
            ) : (
              <Stack direction='column' spacing={10}>
                <Box>
                  <PokemonsList pokemons={currentPagePokemons} />
                </Box>
                <Box mx='auto'>
                  <PokemonPagination
                    numPages={numPages}
                    page={page}
                    setPage={setPage}
                  />
                </Box>
              </Stack>
            )}
          </Stack>
        )
      )}
    </>
  );
};

export default PokemonListPage;
