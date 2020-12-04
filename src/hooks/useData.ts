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

// useEffect получает объект, а он кждый раз новый => запускается цикл
const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
