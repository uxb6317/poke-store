import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../shared/api';

const initialState = {
  pokemonDetail: {},
  isLoading: false
};

export const pokemonDetailSlice = createSlice({
  name: 'pokemonDetail',
  initialState,
  reducers: {
    getDetailStart: (state, action) => {
      state.isLoading = true;
    },
    getDetailSuccess: (state, action) => {
      const { pokemon } = action.payload;

      state.pokemonDetail = pokemon;
      state.isLoading = false;
    }
  }
});

export const fetchPokemonDetails = name => async dispatch => {
  try {
    dispatch(getDetailStart());
    const pokemon = {};
    const response = await API.get(`/pokemon/${name}`);

    pokemon.abilities = response.data.abilities;
    pokemon.height = response.data.height;
    pokemon.moves = response.data.moves;
    pokemon.name = response.data.name;
    pokemon.sprites = response.data.sprites;
    pokemon.stats = response.data.stats;
    pokemon.types = response.data.types;
    pokemon.types = response.data.types;
    pokemon.weight = response.data.weight;

    const speciesResponse = await API.get(`/pokemon-species/${name}`);

    pokemon.description = speciesResponse.data.flavor_text_entries[2];
    pokemon.genera = speciesResponse.data.genera[2];
    pokemon.habitat = speciesResponse.data.habitat;

    dispatch(getDetailSuccess({ pokemon }));
  } catch (error) {
    console.log(error);
  }
};

export const { getDetailStart, getDetailSuccess } = pokemonDetailSlice.actions;
export default pokemonDetailSlice.reducer;
