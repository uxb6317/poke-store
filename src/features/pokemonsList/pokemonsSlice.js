import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../shared/api';

const PER_PAGE = 20;

const initialState = {
  pokemonsByName: {},
  currentPage: 1,
  pages: {},
  isLoading: false
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
        state.pokemonsByName[
          pokemon.name
        ].sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
          1}.png`;
      });

      const numPages = Math.floor(pokemons.length / PER_PAGE);
      for (let index = 0; index <= numPages; index++) {
        if (index === 0) {
          state.pages[index + 1] = pokemons
            .slice(0, PER_PAGE)
            .map(pokemon => pokemon.name);
        } else {
          state.pages[index + 1] = pokemons
            .slice(index * PER_PAGE, index * PER_PAGE + PER_PAGE)
            .map(pokemon => pokemon.name);
        }
      }

      state.isLoading = false;
    },
    jumpToPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const fetchPokemons = () => async dispatch => {
  dispatch(getPokemonsStart());
  const response = await API.get('/pokemon?limit=151');
  const pokemons = response.data.results;
  dispatch(getPokemons({ pokemons }));
};

export const { getPokemons, getPokemonsStart, jumpToPage } = listSlice.actions;

export default listSlice.reducer;
