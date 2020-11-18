import { useEffect, useState } from 'react';
import { IPokemon } from '../components/PokemonCard';

import config from '../config/index';

export interface IData {
  count?: number;
  limit?: string;
  offset?: number;
  total?: number;
  pokemons?: IPokemon[] | undefined;
}

const usePokemons = () => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default usePokemons;
