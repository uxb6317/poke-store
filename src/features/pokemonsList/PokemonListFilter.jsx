import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Divider,
} from '@chakra-ui/core';

import TypesFilter from './TypesFilter';
import PokemonOrderFilter from './PokemonOrderFilter';

const PokemonListFilter = ({
  typeFilter,
  handleTypeFilter,
  onClose,
  isOpen,
}) => {
  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Filter Pokemons</DrawerHeader>
        <DrawerBody py={6}>
          <PokemonOrderFilter />
          <Text mt={4} color='blue.500' fontWeight='semibold'>
            Types
          </Text>
          <Divider />
          <TypesFilter
            typeFilter={typeFilter}
            handleTypeFilter={handleTypeFilter}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default PokemonListFilter;
