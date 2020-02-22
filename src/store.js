import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import pokemonsReducers from './features/pokemonsList/pokemonsSlice';
import pokemonDetailReducer from './features/pokemonDetail/pokemonDetailSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducers,
    pokemonDetail: pokemonDetailReducer
  },
  devTools: true
});
