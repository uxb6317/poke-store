import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/core';

import { fetchPokemonDetails } from '../features/pokemonsList/pokemonsSlice';
import PokemonDetail from '../features/pokemonDetail/PokemonDetail';

const PokemonDetailPage = () => {
  const dispatch = useDispatch();
  const { pokemonsByName, isLoading } = useSelector((state) => state.pokemons);
  const { name } = useParams();
  const pokemon = pokemonsByName[name];

  useEffect(() => {
    dispatch(fetchPokemonDetails(name));
  }, [dispatch, name]);

  return (
    <>{isLoading ? <Spinner /> : pokemon && <PokemonDetail {...pokemon} />}</>
  );
};

export default PokemonDetailPage;
