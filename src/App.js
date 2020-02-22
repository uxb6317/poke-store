import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from './features/pokemonsList/pokemonsSlice';

import Nav from './features/nav/Nav';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetail from './features/pokemonDetail/PokemonDetail';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <PokemonListPage />
        </Route>
        <Route path='/pokemon/:name'>
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
