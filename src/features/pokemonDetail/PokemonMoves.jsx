import React from 'react';
import { Stack, Input, Flex, Badge } from '@chakra-ui/core';

const PokemonMoves = ({ moves }) => {
  return (
    <>
      <Stack isInline alignItems='baseline'>
        <Input placeholder='Search moves...' />
      </Stack>
      <Flex style={{ flexWrap: 'wrap' }}>
        {moves.map(({ move: { name } }) => (
          <Badge m={1} borderColor='gray.600' border='1px' key={name}>
            {name}
          </Badge>
        ))}
      </Flex>
    </>
  );
};

export default PokemonMoves;
