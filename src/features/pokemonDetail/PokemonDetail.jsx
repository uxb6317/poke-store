import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchPokemonDetails } from './pokemonDetailSlice';

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector(state => state.pokemonDetail);
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchPokemonDetails(name));
  }, [dispatch, name]);

  return <div>{console.log(pokemonDetail)}</div>;
};

export default PokemonDetail;
