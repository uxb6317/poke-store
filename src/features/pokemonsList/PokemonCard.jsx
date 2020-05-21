import React from 'react';
import { Flex, Image, Text, PseudoBox } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const history = useHistory();

  return (
    <PseudoBox
      shadow='sm'
      p={1}
      bg='white'
      textTransform='capitalize'
      cursor='pointer'
      onClick={() => history.push(`/pokemon/${pokemon.name}`)}
      pos='relative'
      transition='all .1s'
      _hover={{
        shadow: 'md',
        transform: 'scale(1.05)',
        fontWeight: 'semibold',
      }}
    >
      <Flex flexDirection='column' align='center'>
        <Image
          w='full'
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          objectFit='contain'
        />
        <Text fontSize='lg'>{pokemon.name}</Text>
      </Flex>
    </PseudoBox>
  );
};

export default PokemonCard;
