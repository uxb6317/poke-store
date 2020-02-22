import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box } from '@chakra-ui/core';

import { jumpToPage } from './pokemonsSlice';

const PokemonPagination = ({ pages, currentPage }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      {Object.keys(pages).map(page => (
        <Button
          isDisabled={page === currentPage}
          mx={1}
          onClick={() => dispatch(jumpToPage(page))}
          key={page}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default PokemonPagination;
