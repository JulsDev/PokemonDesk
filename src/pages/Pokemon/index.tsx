import React from 'react';
import { IPokemon } from '../../components/PokemonCard';
import useData from '../../hooks/useData';

import as from '../../App.module.scss';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className={as.container}>This is pokemon id equal {data?.name}</div>;
};

export default Pokemon;
