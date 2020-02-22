import React from 'react';
import { Flex, Image, Box, Text } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const history = useHistory();

  return (
    <Box
      borderWidth='1px'
      rounded='md'
      borderColor='gray.400'
      textTransform='capitalize'
      cursor='pointer'
      onClick={() => history.push(`/pokemon/${pokemon.name}`)}
    >
      <Flex flexDirection='column' align='center'>
        <Image src={pokemon.sprite} alt={pokemon.name} objectFit='contain' />
        <Text>{pokemon.name}</Text>
      </Flex>
    </Box>
  );
};

export default PokemonCard;
