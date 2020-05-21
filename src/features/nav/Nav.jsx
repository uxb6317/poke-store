import React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box shadow='sm' w='full' bg='white'>
      <Flex
        maxW='7xl'
        mx='auto'
        px={{ base: 6, xl: 0 }}
        mb={10}
        py={3}
        align='baseline'
      >
        <Heading as='h1' size='md' color='red.500' mr={10}>
          <Link to='/'>POKE-STORE</Link>
        </Heading>
      </Flex>
    </Box>
  );
};

export default Nav;
