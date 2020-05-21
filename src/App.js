import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';

import { fetchPokemons } from './features/pokemonsList/pokemonsSlice';

import Nav from './features/nav/Nav';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <Router>
      <Box bg='gray.50' minH='screen-h' pb='2%'>
        <Nav />
        <Box maxW='7xl' mx='auto' px={{ base: 6, xl: 0 }}>
          <Switch>
            <Route exact path='/'>
              <PokemonListPage />
            </Route>
            <Route path='/pokemon/:name'>
              <PokemonDetailPage />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
