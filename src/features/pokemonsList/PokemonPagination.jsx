import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/core';

const PokemonPagination = ({ numPages, setPage, page }) => {
  return (
    <ButtonGroup>
      {numPages !== 0 &&
        Array(numPages)
          .fill()
          .map((_, index) => {
            const p = index + 1;
            return (
              <Button
                variantColor='red'
                onClick={() => setPage(p)}
                isDisabled={p === page}
                key={index}
              >
                {p}
              </Button>
            );
          })}
    </ButtonGroup>
  );
};

export default PokemonPagination;
