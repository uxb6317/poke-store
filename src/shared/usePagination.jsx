import { useState, useEffect } from 'react';

export const usePagination = (numItems, perPage) => {
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    if (numItems !== 0) {
      setNumPages(Math.ceil(numItems / perPage));
    }
  }, [numItems, perPage]);

  // for (let index = 0; index <= numPages; index++) {
  //   if (index === 0) {
  //     state.pages[index + 1] = pokemons
  //       .slice(0, PER_PAGE)
  //       .map((pokemon) => pokemon.name);
  //   } else {
  //     state.pages[index + 1] = pokemons
  //       .slice(index * PER_PAGE, index * PER_PAGE + PER_PAGE)
  //       .map((pokemon) => pokemon.name);
  //   }
  // }

  const nextPage = () => {
    if (page < numPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return [page, setPage, numPages, nextPage, prevPage];
};
