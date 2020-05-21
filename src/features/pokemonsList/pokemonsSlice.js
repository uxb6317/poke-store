import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../shared/api';

const initialState = {
  pokemonsByName: {},
  pokemonsList: [],
  isLoading: false,
};

export const listSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemonsStart: (state, action) => {
      state.isLoading = true;
    },
    getPokemons: (state, action) => {
      const { pokemons } = action.payload;

      pokemons.forEach((pokemon, index) => {
        state.pokemonsByName[pokemon.name] = pokemon;
        state.pokemonsByName[pokemon.name].sprites = {
          front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        };
      });
      state.pokemonsList = pokemons.map((pokemon) => pokemon.name);

      state.isLoading = false;
    },
    getDetailStart: (state, action) => {
      state.isLoading = true;
    },
    getDetailSuccess: (state, action) => {
      const { pokemon } = action.payload;
      state.pokemonsByName[pokemon.name] = pokemon;

      state.isLoading = false;
    },
  },
});

export const fetchPokemons = () => async (dispatch) => {
  dispatch(getPokemonsStart());
  const response = await API.get('/pokemon?limit=151');
  const pokemons = response.data.results;
  dispatch(getPokemons({ pokemons }));
};

export const fetchPokemonDetails = (name) => async (dispatch) => {
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

export const {
  getPokemons,
  getPokemonsStart,
  getDetailStart,
  getDetailSuccess,
} = listSlice.actions;

export default listSlice.reducer;
