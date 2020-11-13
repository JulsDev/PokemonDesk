import { useEffect, useState } from 'react';
import { IPokemon } from '../components/PokemonCard';

export interface IData {
  count?: number;
  limit?: string;
  offset?: number;
  total?: number;
  pokemons?: IPokemon[] | undefined;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=9');
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
