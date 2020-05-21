import React from 'react';
import { InputGroup, Input, Stack } from '@chakra-ui/core';

const Search = ({ handleSearch }) => {
  return (
    <Stack direction='column'>
      <InputGroup>
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder='Search...'
          width='full'
        />
      </InputGroup>
    </Stack>
  );
};

export default Search;
