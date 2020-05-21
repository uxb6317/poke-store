import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/core';

import TypesFilter from './TypesFilter';

const PokemonListFilter = ({
  typeFilter,
  handleTypeFilter,
  onClose,
  isOpen,
}) => {
  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Filter Pokemons</DrawerHeader>
        <DrawerBody>
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
