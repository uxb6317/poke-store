import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  Spinner,
  Grid,
  Stack,
  Badge,
  Text,
  Image,
  Flex,
  Divider,
  List,
  ListItem,
  Input
} from '@chakra-ui/core';

import { fetchPokemonDetails } from './pokemonDetailSlice';

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { pokemonDetail, isLoading } = useSelector(
    state => state.pokemonDetail
  );
  const { name } = useParams();

  const types = pokemonDetail?.types;
  const habitat = pokemonDetail?.habitat.name;
  const pokemonName = pokemonDetail?.name;
  const genera = pokemonDetail?.genera.genus;
  const sprites = pokemonDetail?.sprites;
  const description = pokemonDetail?.description.flavor_text;
  const abilities = pokemonDetail?.abilities;
  const height = pokemonDetail?.height;
  const weight = pokemonDetail?.weight;
  const stats = pokemonDetail?.stats;
  const moves = pokemonDetail?.moves;

  useEffect(() => {
    dispatch(fetchPokemonDetails(name));
  }, [dispatch, name]);

  return (
    <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        pokemonDetail && (
          <Grid
            mx='auto'
            width='80%'
            gridTemplateColumns='max-content 15rem auto'
            gridTemplateRows='auto auto'
            gridColumnGap='1rem'
          >
            {console.log(pokemonDetail)}
            <Stack gridRow='2 / span 1'>
              {types.map(({ type: { name } }) => (
                <Badge variantColor='red' key={name}>
                  {name}
                </Badge>
              ))}
              <Badge variantColor='green'>{habitat}</Badge>
              <Badge>Height: {height} ft</Badge>
              <Badge>Weight: {weight} lb</Badge>
            </Stack>
            <Box gridRow='1 / span 1' gridColumn='2 / span 1' mb={2}>
              <Text
                style={{ boxSizing: 'border-box' }}
                textTransform='capitalize'
                fontSize='3xl'
                lineHeight='.8'
              >
                {pokemonName}
              </Text>
              <Text fontSize='sm'>{genera}</Text>
            </Box>
            <Box gridRow='2 / span 1' gridColumn='2 / span 1'>
              <Image
                src={sprites.front_default}
                alt={pokemonName}
                objectFit='contain'
                width='100%'
                border='1px'
                borderColor='gray.40'
              />
              <Grid gridTemplateColumns='repeat(3, 1fr)'>
                {Object.keys(sprites).map(key => {
                  if (sprites[key]) {
                    return <Image key={key} src={sprites[key]} />;
                  }
                })}
              </Grid>
            </Box>
            <Stack spacing={3} gridColumn='3 / span 1' gridRow='2 / span 1'>
              <Stack isInline align='baseline'>
                <Text as='u'>Abilites: </Text>
                {abilities.map(({ ability: { name } }) => (
                  <Badge key={name}>{name}</Badge>
                ))}
              </Stack>
              <Text>{description}</Text>
              <Grid gridTemplateColumns='max-content auto'>
                <Box mr={5}>
                  <List>
                    {stats.map(({ base_stat, stat: { name } }) => (
                      <ListItem key={name}>{`${name}: ${base_stat}`}</ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Stack isInline alignItems='baseline'>
                    <Input placeholder='Search moves...' />
                  </Stack>
                  <Flex style={{ flexWrap: 'wrap' }}>
                    {moves.map(({ move: { name } }) => (
                      <Badge
                        m={1}
                        borderColor='gray.600'
                        border='1px'
                        key={name}
                      >
                        {name}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </Grid>
            </Stack>
          </Grid>
        )
      )}
    </Box>
  );
};

export default PokemonDetail;
