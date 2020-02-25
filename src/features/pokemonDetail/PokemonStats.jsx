import React from 'react';
import { List, ListItem } from '@chakra-ui/core';

const PokemonStats = ({ stats }) => {
  return (
    <List>
      {stats.map(({ base_stat, stat: { name } }) => (
        <ListItem key={name}>{`${name}: ${base_stat}`}</ListItem>
      ))}
    </List>
  );
};

export default PokemonStats;
