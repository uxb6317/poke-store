import React from 'react';
import { Button, SimpleGrid } from '@chakra-ui/core';

const TYPES_ARR = [
  'normal',
  'fire',
  'fighting',
  'water',
  'flying',
  'grass',
  'poison',
  'electric',
  'ground',
  'psychic',
  'rock',
  'ice',
  'bug',
  'dragon',
  'ghost',
  'dark',
  'steel',
  'fairy',
];

const TypesFilter = ({ typeFilter, handleTypeFilter }) => {
  return (
    <SimpleGrid minChildWidth='60px' spacing={4}>
      {TYPES_ARR.map((t) => (
        <Button
          variantColor={typeFilter.includes(t) ? 'red' : 'gray'}
          key={t}
          onClick={() => handleTypeFilter(t)}
          value={t}
        >
          {t}
        </Button>
      ))}
    </SimpleGrid>
  );
};

export default TypesFilter;
