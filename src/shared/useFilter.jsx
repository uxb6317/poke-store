import { useState } from 'react';

export const useFilter = () => {
  const [filters, setFilters] = useState([]);

  const handleSelectFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return [filters, handleSelectFilter];
};
