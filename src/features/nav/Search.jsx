import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Flex,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  Text,
  Icon,
  Divider
} from '@chakra-ui/core';
import Fuse from 'fuse.js';

import { fetchPokemons } from '../pokemonsList/pokemonsSlice';

const RESULT_NUM = 5;

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [term, setTerm] = useState('');
  const { pokemonsByName } = useSelector(state => state.pokemons);

  const filteredPokemons = useMemo(() => {
    let pokemons = [];
    for (const name in pokemonsByName) {
      pokemons.push({ name });
    }
    const fuse = new Fuse(pokemons, {
      keys: ['name'],
      shouldSort: true
    });

    return fuse.search(term);
  }, [term, pokemonsByName]);

  const handleSearchChange = e => {
    setTerm(e.target.value);
  };

  const handleSearchClick = name => {
    setTerm('');
    history.push(`/pokemon/${name}`);
  };

  return (
    <Flex flexDir='column'>
      <InputGroup>
        <Input
          value={term}
          onChange={handleSearchChange}
          placeholder='Search...'
          width='20rem'
          // onBlur={() => setTerm('')}
        />
        {term && (
          <InputRightElement
            children={
              <Icon
                cursor='pointer'
                onClick={() => setTerm('')}
                name='close'
                size={3}
              />
            }
          />
        )}
      </InputGroup>

      <Box pos='relative'>
        <Stack
          bg='white'
          pos='absolute'
          top={0}
          right={0}
          left={0}
          p={1}
          boxShadow='lg'
          borderRadius='md'
        >
          {filteredPokemons.slice(0, RESULT_NUM).map(({ name }, index) => (
            <Box onClick={() => handleSearchClick(name)} key={name}>
              <Text cursor='pointer' p={1} fontWeight='semibold'>
                {name}
              </Text>
              {index !== RESULT_NUM - 1 && <Divider />}
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Search;
