import React from 'react';
import {
  Box,
  Stack,
  Text,
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
} from '@chakra-ui/core';

import { typeColorTable } from './typesColors';
import PokemonStats from './PokemonStats';
import PokemonSprites from './PokemonSprites';
import SolidBadge from '../../shared/SolidBadge';

const PokemonDetail = ({
  types,
  name,
  sprites,
  description,
  habitat,
  weight,
  height,
  abilities,
  genera,
  stats,
  moves,
}) => {
  return (
    <Box>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} align='start'>
        {console.log(moves)}
        <PokemonSprites sprites={sprites} />
        <Stack spacing={3} mt={4} ml={{ base: 0, lg: 4 }}>
          <Stack direction='row' spacing={2} align='baseline'>
            <Heading textTransform='capitalize'>{name}</Heading>
            <Text>{genera && `(${genera.genus})`}</Text>
          </Stack>
          <Stack direction='row' spacing={2}>
            {types &&
              types.map((type) => (
                <Box>
                  <SolidBadge
                    text={type.type.name}
                    color={typeColorTable[type.type.name]}
                  />
                </Box>
              ))}
          </Stack>
          <Stack direction='row' spacing={2}>
            <Breadcrumb>
              {abilities &&
                abilities.map((ability) => (
                  <BreadcrumbItem>
                    <SolidBadge text={ability.ability.name} />
                  </BreadcrumbItem>
                ))}
            </Breadcrumb>
          </Stack>
          <Stack direction='row' spacing={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                {habitat && <SolidBadge text={habitat.name} />}
              </BreadcrumbItem>
              <BreadcrumbItem>
                {height && <SolidBadge text={`${(height / 10).toFixed(1)}m`} />}
              </BreadcrumbItem>
              <BreadcrumbItem>
                {weight && (
                  <SolidBadge text={`${(weight / 10).toFixed(1)}kgs`} />
                )}
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
          <Text>{description && description.flavor_text}</Text>
          <Box mt={6}>{stats && <PokemonStats stats={stats} />}</Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default PokemonDetail;
