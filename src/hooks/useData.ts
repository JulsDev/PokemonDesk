import { useEffect, useState } from 'react';
import { IPokemon } from '../components/PokemonCard';

import req from '../utils/request';

export interface IData {
  count?: number;
  limit?: string;
  offset?: number;
  total?: number;
  pokemons?: IPokemon[] | undefined;
}

const useData = (endpoint: string) => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
