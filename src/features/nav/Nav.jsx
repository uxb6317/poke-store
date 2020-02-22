import React from 'react';
import { Flex, Heading, Link, Box } from '@chakra-ui/core';

import Search from './Search';

const Nav = () => {
  return (
    <Flex mb={10} py={3} px={10} w='100%' borderBottom='1px' align='baseline'>
      <Heading color='red.600' mr={10}>
        POKE-STORE
      </Heading>
      <Link {...linkStyle}>Pokemons</Link>
      <Link {...linkStyle}>Sale</Link>
      <Box ml={10}>
        <Search />
      </Box>
    </Flex>
  );
};

const linkStyle = {
  p: 2,
  mx: 2
};

export default Nav;
