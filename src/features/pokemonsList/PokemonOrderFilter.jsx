import React from 'react';

import { Select, Stack, Text } from '@chakra-ui/core';

const PokemonOrderFilter = () => {
  return (
    <Stack direction='row' spacing={2} align='baseline'>
      <Text color='blue.500' fontWeight='semibold'>
        Order:
      </Text>
      <Select placeholder='Select option'>
        <option value='pokedex'>Pokedex #</option>
        <option value='price'>Price</option>
        <option value='name'>Name</option>
      </Select>
    </Stack>
  );
};

export default PokemonOrderFilter;
